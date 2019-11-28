function solve(input){

    const onlyLetters = (word) => {
        return word.match("^[a-zA-Z]+$");
    };

    let words = input.split(' ');

    for(let word of words){
        if(word[0] === '#'){
            if(word.length > 1){
                let output = word.substring(1, word.length);
                if(onlyLetters(output)){
                console.log(output);
                }
            }
        }
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');