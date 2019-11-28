function solve(searchedWords, text){

    let words = searchedWords.split(', ');

    words.forEach((word) => { 
        text = text.replace('*'.repeat(word.length), word);
    })

    console.log(text);
}

solve('great',
'softuni is ***** place for learning new programming languages');