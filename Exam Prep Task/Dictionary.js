function solve(input){

    let finnalCommand = input.pop();
    let wordsToCheck = input.pop().split(' | ');

    let arr = {};
    let definitions = [];
    let wordsToPrint = [];

    for(let line of input){
        let pair = line.split(' | ');

        for(let index of pair){
            let splitedPair = index.split(': ');
                if(splitedPair.length > 1){
                    let word = splitedPair[0];
                    let definition = splitedPair[1];
                    if(!arr[word]){
                        definitions = [];
                        arr[word] = definitions;
                        definitions.push(definition);
                    } else {
                        arr[word].push(definition);
                    }
                }
        }
    }
    
    if(finnalCommand === 'End'){
        for(let word in arr){
            if(wordsToCheck.includes(word)){
                let sortedDefinitions = Object.entries(arr).sort((a, b) => {
                    let c = b[1][0].length;
                    let d = a[1][0].length;
                    if (c !== d) {
                        return c - d;
                    }
                }).forEach((element) => {
                    if(word === element[0]){
                    console.log(`${element[0]}`);
                    let definitionPrint = element[1];
                    definitionPrint.forEach(def => {
                        console.log(` -${def}`);
                    })
                }
                });
            }
        }
    } else {
        for(let word in arr){
            wordsToPrint.push(word);
            wordsToPrint.sort((a, b) => {
                a = a[0];
                b = b[0];
                return a.localeCompare(b);
            });
        }
        console.log(wordsToPrint.join(' '));
    }
}

solve([ 
    'tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
    'bit | code | tackle',
    'End'
    ]);