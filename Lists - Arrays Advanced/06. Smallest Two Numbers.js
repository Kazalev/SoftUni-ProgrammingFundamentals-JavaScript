function solve(arr) {

    let sortedInAsc = arr.sort((a, b) => {return a - b;})
    let smallesElements = sortedInAsc.slice(0, 2);

    console.log(smallesElements.join(' '));
}

solve([30, 15, 50, 5]);