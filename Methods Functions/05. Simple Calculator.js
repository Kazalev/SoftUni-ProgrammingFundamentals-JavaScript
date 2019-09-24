function solve(firstNum, secondNum, operation){

    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let result = 0;

    switch(operation){
        case 'multiply':
            result = multiply(firstNum, secondNum);
        break;
        case 'divide':
            result = divide(firstNum, secondNum);
        break;
        case 'add':
            result = add(firstNum, secondNum);
        break;
        case 'subtract':
            result = subtract(firstNum, secondNum);
        break;
    }

    return result;
}

console.log(solve(87, 92, 'multiply'));
