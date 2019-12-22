function solve(input){

    input.shift();
    let totalWeight = 0;

    const findName = (name) => {
        let split = name
            .split('')
            .forEach((char) => {
                let ascii = char.charCodeAt(0);
                if (ascii >= 65 && ascii <= 90 || ascii >= 97 && ascii <= 122 || ascii === 32){
                    validName += char;
                }
            });
    }

    const findKind = (kind) => {
        let split = kind
            .split('')
            .forEach((char) => {
                let ascii = char.charCodeAt(0);
                if (ascii >= 65 && ascii <= 90 || ascii >= 97 && ascii <= 122 || ascii === 32){
                    validKind += char;
                }
            });
    }

    const findWeight = (name, kind) => {
        let concated = name.concat(kind);
        let split = concated
            .split('')
            .forEach((char) => {
                let ascii = char.charCodeAt(0);
                if(ascii >= 48 && ascii <= 57){
                    char = Number(char);
                    totalWeight += char;
                }
            });
    }

    for (let line of input) {
        let pattern = /^n:([^;]+);t:([^;]+);c--([A-Za-z\s]+)$/gm;
 
        var validName = '';
        var validKind = '';
 
        let matcher = pattern.exec(line);
        if (matcher) {
            let name = matcher[1];
            let kind = matcher[2];
            let country = matcher[3];
 
            findName(name);
            findKind(kind);
            findWeight(name, kind);
            console.log(`${validName} is a ${validKind} from ${country}`);
        }
    }
    console.log(`Total weight of animals: ${totalWeight}KG`);
}

solve([ 
    '3',
    'n:M5%ar4#le@y;t:B3#e!!a2#2r;c--Australia',
    'n:G3e%6org43e;t:C€$at2%;c--Africa',
    'n:AlicE:Won;c-India'
    ]);