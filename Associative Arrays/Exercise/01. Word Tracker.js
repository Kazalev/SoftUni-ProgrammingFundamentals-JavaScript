function solve(input){

    let words = input
        .shift()
        .split(' ');

    let wordsCount = {};
    for(let word of words){
        wordsCount[word] = 0;
    }

    for(let currentWord of input){
        if(wordsCount.hasOwnProperty(currentWord)){
            wordsCount[currentWord]++;
        }
    }

    let sortedWords = Object.entries(wordsCount) //Обръщаме обекта в масив (от масиви)
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