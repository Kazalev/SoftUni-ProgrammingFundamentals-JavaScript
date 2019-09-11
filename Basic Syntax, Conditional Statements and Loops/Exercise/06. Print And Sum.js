function solve(n1, n2){

    let counter = 0;
    let output = '';

    for(let i=n1; i<=n2; i++){
        output += `${i} `;
        counter += i;
    }
    console.log(output);
    console.log("Sum: " + counter);
}

solve(5, 10)