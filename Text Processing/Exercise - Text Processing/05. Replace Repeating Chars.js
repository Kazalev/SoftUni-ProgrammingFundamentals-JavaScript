function solve(text){

    let output = text[0];

    for(let i = 1; i < text.length; i++){
        if(text[i] !== text[i-1]){
            output += text[i];
        }
    }
    
    console.log(output);
}

solve('aaaaabbbbbcdddeeeedssaa');