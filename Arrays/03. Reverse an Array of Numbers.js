function solve(num, arr){
    let resultArr = [];

    for (let i = 0; i < num; i++) {
        let currentElement = arr[num - 1 - i];

        resultArr.push(currentElement);        
    }
    
    let output = '';

    for(let i = 0; i < resultArr.length; i++){
        output += resultArr[i] + ' ';
    }

    console.log(output);
}

solve(3, [10, 20, 30, 40, 50])