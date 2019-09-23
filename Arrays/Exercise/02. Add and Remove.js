function solve (commands){

    let result = [];
    let empty = 'Empty';

    for(let i = 0; i < commands.length; i++){
        let currentCommand = commands[i];

        if(currentCommand === 'add'){
            result.push(i + 1);
        } else if(currentCommand === 'remove'){
            result.pop();
        }
    }
    if(!(result.length > 0)){
        console.log(empty);
    } else {
        console.log(result.join(' '));
    }
}

solve(['add', 'add', 'remove', 'add', 'add']);
solve(['add', 'add', 'add', 'add']);
solve(['remove', 'remove', 'remove']);