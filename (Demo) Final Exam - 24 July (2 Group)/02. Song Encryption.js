function solve(input){

    let pattern = /^(?<name>[A-Z][a-z' ]+):(?<song>[A-Z ]+)$/gm;

    while ((line = input.shift()) !== 'end') {

        if (line.match(pattern)) {

            let forDecription = line.match(pattern)[0];
            let key = forDecription.split(':')[0].length;
            let decrepted = forDecription.split('').map(el => {
                if (el.charCodeAt() >= 65 && el.charCodeAt() <= 90) {
                    return String.fromCharCode(65 + ((el.charCodeAt() + key) % 65) % 26);
                } else if (el.charCodeAt() >= 97 && el.charCodeAt() <= 122) {
                    return String.fromCharCode(97 + ((el.charCodeAt() + key) % 97) % 26);
                } else if (el.charCodeAt() === 58) {
                    return String.fromCharCode(64);
                } else {
                    return el
                }
            }).join('');
            console.log(`Successful encryption: ${decrepted}`);
        } else {
            console.log('Invalid input!')
        }
    }
}

solve([
    'Eminem:VENOM',
    'Linkin park:NUMB',
    'Drake:NONSTOP',
    'Adele:HELLO',
    'end'
]);