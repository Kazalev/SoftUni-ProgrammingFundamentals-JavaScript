function solve(arr){

    let k = arr.shift();

    let firstElements = arr.slice(0, k);
    let lastElements = arr.slice(arr.length - k);
    
    console.log(firstElements.join(' '));
    console.log(lastElements.join(' '));
}

solve([2, 7, 8, 9]);