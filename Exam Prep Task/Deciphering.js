function solve(input){

    let encryptedString = input[0];
    let subString = input[1];
    let decyptedString = '';

    let pattern = /[d-z#|{}]+/gm;
    let matcher = pattern.exec(encryptedString);
    
    if(matcher[0].length === encryptedString.length){
        [...encryptedString].forEach((char) => {
            let ascii = char.charCodeAt(0);
            ascii -= 3;
            let convertedChars = String.fromCharCode(ascii); // !!!
            decyptedString += convertedChars;
        });
    } else {
        console.log(`This is not the book you are looking for.`);
    }
    
    let [ charsToSearch, charsToReplace ] = subString.split(' ');

    while(decyptedString.includes(charsToSearch)){
        decyptedString = decyptedString.replace(charsToSearch, charsToReplace);
    }

    console.log(decyptedString);
}

solve([ 'wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw',
        'ec an']);