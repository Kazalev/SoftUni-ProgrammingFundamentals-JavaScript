function solve(key, text){

    text = text.toLowerCase();
    key = key.toLowerCase();

    let words = text.split(' ');
    let bool = false;

    for(let i = 0; i < words.length; i++){
        let currentWord = words[i];

        if(currentWord !== key){
            
        } else {
            console.log(currentWord);
            bool = true;
            break;
        }
    }
    
    if(bool === false){
    console.log(`${key} not found!`);
    }
}

solve('world',
'JavaScript is the best programming language in the world');