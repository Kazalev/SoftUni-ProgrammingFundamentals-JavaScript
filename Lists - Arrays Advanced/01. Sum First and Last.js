function solve(arr) {
    let firstNum = Number(arr.shift());
    let lastNum = Number(arr.pop());
    
    return firstNum + lastNum;
}

console.log(solve(['20', '30', '40']));