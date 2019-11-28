function solve(string, searchWord){

    let words = string.split(' ');
    let counter = 0;
    
    for(let word of words){
        if(word === searchWord){
            counter++; 
        }
    }
    
    console.log(counter);
}

solve(
    'This is a word and it also is a sentence',
    'is');