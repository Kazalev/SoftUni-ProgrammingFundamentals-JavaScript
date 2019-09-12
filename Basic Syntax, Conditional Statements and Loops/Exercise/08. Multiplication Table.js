function solve(n){

    for(let i = 1; i <= 10; i++){
        let product = i * n
        let result = (n + " X " + i + " = " + product);
        console.log(result);
    }
}

solve(7);