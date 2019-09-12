function replaceUnderscore(string, char, result){
    let res = string.replace('_', char);
    let output = res === result ? 'Matched' : 'Not Matched';
    console.log(output);
}

replaceUnderscore('Somet_ing')
