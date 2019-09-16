function solve(firstOperand, operator, secondOperand){
    let = output = 0;

    switch(operator) {
        case '+':
            output = firstOperand + secondOperand;
            break;
        case '-':
            output = firstOperand - secondOperand;
            break;
        case '*':
            output = firstOperand * secondOperand;
            break;
        case '/':
            output = firstOperand / secondOperand;
            break;
    }

    console.log(output.toFixed(2));
}

solve(25.5, '-', 3)