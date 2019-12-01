function solve(text){

    const isUpperCase = (symbol) => {
        return symbol === symbol.toUpperCase();
    };

    const isLowerCase = (symbol) => {
        return symbol === symbol.toLowerCase();
    };

    let pattern = /\s+/g;
    let words = text.split(' ').filter(el => el !== '');
    let totalSum = 0;

    for(let word of words){
        let firstLetter = word[0];
        let lastLetter = word[word.length - 1];
        let number = Number(word.substring(1, word.length - 1));

        let firstAscii = firstLetter.toLowerCase().charCodeAt(0);
        let secondAscii = lastLetter.toLowerCase().charCodeAt(0);

        if(isUpperCase(firstLetter)){
            number /= (firstAscii - 96);
        } else {
            number *= (firstAscii - 96);
        }

        if(isUpperCase(lastLetter)){
            number -= (secondAscii - 96);
        } else {
            number += (secondAscii - 96);
        }

        totalSum += number;
    }

    console.log(totalSum.toFixed(2));
}

solve('A12b     s17G');