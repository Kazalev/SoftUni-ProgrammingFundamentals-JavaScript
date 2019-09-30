function solve(commands) {

    let arr = commands
        .shift()
        .split(' ')
        .map(Number);  
        
    for(let i = 0; i < commands.length; i++){
        let [command, firstNum, secondNum] = commands[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

       if(command === 'Add'){
            arr.push(firstNum);
       } else if(command === 'Remove'){
            arr = arr.filter(el => el !== firstNum);
       } else if(command === 'RemoveAt'){
            arr.splice(firstNum, 1);
       } else {
            arr.splice(secondNum, 0, firstNum);
       }
    }
    console.log(arr.join(' '));
}

solve(['4 19 2 53 6 43',
        'Add 3',
        'Remove 2',
        'RemoveAt 1',
        'Insert 8 3'
      ]);