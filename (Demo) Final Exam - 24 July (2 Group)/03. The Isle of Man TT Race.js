function solve(input){

    let geohashcode = '';

    for(let line of input){
        let pattern = /^([#$%*&])([A-Za-z]+)\1=(\d+)!!([\w\W]*?)$/gm;
        let matcher = pattern.exec(line);

        if(matcher !== null){
            let [ racer, length, encryptedCode ] = matcher.slice(2);
            length = Number(length);

            if(length === encryptedCode.length){
                
                [...encryptedCode].forEach((char) => {
                    let ascii = char.charCodeAt(0);
                    ascii += length;
                    let convertedChars = String.fromCharCode(ascii);
                    geohashcode += convertedChars;
                });

                console.log(`Coordinates found! ${racer} -> ${geohashcode}`);
            } else {
                console.log(`Nothing found!`);
            }
        } else {
            console.log(`Nothing found!`);
        }
    }
}

solve([
    '%GiacomoAgostini%=7!!hbqw',
    '&GeoffDuke*=6!!vjh]zi',
    'JoeyDunlop=10!!lkd,rwazdr',
    'Mike??Hailwood=5!![pliu',
    '#SteveHislop#=16!!df%TU[Tj(h!!TT[S'
    ]);