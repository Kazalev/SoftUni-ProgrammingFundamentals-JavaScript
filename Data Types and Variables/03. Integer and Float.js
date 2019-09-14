function solve(n1, n2, n3){
    let sum = n1 + n2 + n3;
    let output;

    if(sum % 1 === 0){
        output = sum + ' - Integer';
    } else {
        output = sum + ' - Float';
    }
    console.log(output);
}

solve(101, 200, 10)