function solve(input){

    let string = input.shift();

    for(let line of input){
        let [ command, index, repCount ] = line.split(' ');
        
        if(command === 'Translate'){
            for(let i = 0; i < string.length; i++){
                let currentChar = string[i];
                if(currentChar === index){
                    string = string.replace(currentChar, repCount);
                }
            }
            console.log(string);
        } else if(command === 'Includes'){
            if(string.includes(index)){
                console.log(`True`);
            } else {
                console.log(`False`);
            }
        } else if(command === 'Start'){
            if(string.startsWith(index)){
                console.log(`True`);
            } else {
                console.log(`False`);
            }
        } else if(command === 'Lowercase'){
            string = string.toLowerCase();
            console.log(string);
        } else if(command === 'FindIndex'){
            let foundIndex = string.lastIndexOf(index);
            console.log(foundIndex);
        } else if(command === 'Remove'){
           let removedString = string.substr(repCount);
           console.log(removedString);
        }
    }
}

solve([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End' 
    ]);