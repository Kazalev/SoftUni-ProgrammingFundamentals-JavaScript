function solve(input) {
    /*
    let firstNum = Number(input.shift());
    let lastNum = Number(input.pop());

    let result = firstNum + lastNum;
    console.log(result); и това работи */

    let sum = Number(input[0]) + Number(input[input.length - 1]);
    console.log(sum);
}

solve([11, 58, 69])