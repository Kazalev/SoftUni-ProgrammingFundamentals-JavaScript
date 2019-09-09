function solve(n){

    let sum = 0;
    let currentOddNumber = 1;

    for (let i = 0; i < n; i++){
        console.log(currentOddNumber);
        
        sum += currentOddNumber;
        currentOddNumber += 2;
    }
    console.log('Sum: ' + sum);
    //console.log(`Sum: ${sum}`);
}

solve(5);