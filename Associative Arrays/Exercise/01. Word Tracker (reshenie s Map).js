function solve(input){

    let words = input
        .shift()
        .split(' ');

    let wordsCount = new Map();
    for(let word of words){
        wordsCount.set(word, 0);
    }

    for(let currentWord of input){
        if(wordsCount.has(currentWord)){
            let oldValue = wordsCount.get(currentWord);
            wordsCount.set(currentWord, oldValue + 1);
        }
    }

    let sortedWords = [...wordsCount] //Обръщаме обекта в масив (от масиви)
        .sort((a, b) => {
            let [ word, occurance ] = a;
            // let word = a[0];
            // let occurance = a[1];
            let [ word2, occurance2 ] = b;

            return occurance2 - occurance;
        });

    for(let [ word, occurance ] of sortedWords){
        console.log(`${word} - ${occurance}`);
    }
}

solve([
    'sentence this',
    'In','this','sentence','you','have','to'
    ,'count','the','occurances','of','the'
    ,'words','this','and','sentence','because'
    ,'this','is','your','task'
    ]);