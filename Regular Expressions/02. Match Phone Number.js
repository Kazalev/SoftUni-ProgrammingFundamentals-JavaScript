function regExPhones(input) {

    let pattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;
    let pattern = /\+359(?:[ -])2\1\d{3}\1\d{4}/g;
    let validNames = [];

    while ((validName = pattern.exec(input)) !== null){
        validNames.push(validName[0]);
    }
    
    console.log(validNames.join(', '));
}

regExPhones();