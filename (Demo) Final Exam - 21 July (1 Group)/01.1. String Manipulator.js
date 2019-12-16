function solve(arr){

    let result = '';


    for(let line of arr){
       if(line.startsWith('Add')){

        let text = line.substring(4);
        result += text;

       } else if(line.startsWith('Print')){

        console.log(result);

       } else if(line.startsWith('Upgrade')){

        let symbolToChange = line.substring(8);
        let test = result.charCodeAt(symbolToChange) + 1;

            while(result.includes(symbolToChange)){
                result = result.replace(symbolToChange, String.fromCharCode(test));
            }

       } else if(line.startsWith('Index')){

            let symbol = line.substring(6);
            let indexes = [];

            for(let i = 0; i < result.length; i++){
                let currentChar = result[i];
                if(currentChar === symbol){
                    indexes.push(i);
                }
            }
            console.log(indexes.join(' '));
            
       } else if(line.startsWith('Remove')){
           let stringToRemove = line.substring(7);

           while(result.includes(stringToRemove)){
            result = result.replace(stringToRemove, '');
           }
       } else if(line.startsWith('End')){
       }
    }
}

solve(['Add abracadabra', 'Print', 'Upgrade a', 'Print', 'Index b', 'Remove bbrb', 'Print', 'End']);