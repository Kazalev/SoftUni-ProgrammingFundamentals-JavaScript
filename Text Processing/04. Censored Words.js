function solve(text, word){

    let censored = text;

    while(censored.includes(word)){
        censored = censored.replace(word, '*'.repeat(word.length));
    }

    console.log(censored);
}

solve('A small sentence with some words small', 'small');