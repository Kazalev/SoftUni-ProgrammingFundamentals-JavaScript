function solve(input){

    for(let line of input){

        if(line === 'Last note'){
            break;
        }

        let pattern = /^([A-za-z!@#$?]+)=([\d]*)<<([\w\W]*?)$/gm;
        let matcher = pattern.exec(line);

        if(matcher !== null){
            let [ peakName, length, geohashCode ] = matcher.slice(1);
            length = Number(length);

            if(length === geohashCode.length){
                let realName = '';
                [...peakName].forEach((char) => {
                    let ascii = char.charCodeAt(0);
                        if(ascii >= 65 && ascii <= 90 || ascii >= 97 && ascii <= 122 || ascii >= 48 && ascii <= 57){
                            let charBuffer = String.fromCharCode(ascii);
                            realName += charBuffer;
                        }
                });

                console.log(`Coordinates found! ${realName} -> ${geohashCode}`);
            } else {
                console.log(`Nothing found!`);
            }
        } else {
            console.log(`Nothing found!`);
        }
    }
}

solve([
    '!@Ma?na?sl!u@=7<<tv58ycb4845',
    'E!ve?rest=.6<<tuvz26',
    '!K@2.,##$=4<<tvnd',
    '!Shiha@pan@gma##9<<tgfgegu67',
    '!###Anna@pur@na##=16<<tv5dekdz8x11ddkc',
    'Last note'
    ]);

// solve([
//         'Ka?!#nch@@en@ju##nga@=3<<thfbghvn',
//         '=9Cho?@#Oyu<<thvb7ydht',
//         'Nan??ga#Par!ba!t?=16<<twm03q2rx5hpmyr6',
//         'Dhau??la#gi@ri?!#=3<<bvnfhrtiuy',
//         'Last note'
//         ]);