function solve(input){

    const isUpperCase = (symbol) => {
        return symbol.toUpperCase() === symbol;
    };

    let words = [];

    let currentWord = input[0];
    for(let i = 1; i < input.length; i++){
        if(isUpperCase(input[i])){
            words.push(currentWord);
            currentWord = input[i];
        } else {
            currentWord += input[i];
        }
    }

    words.push(currentWord);

    console.log(words.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');