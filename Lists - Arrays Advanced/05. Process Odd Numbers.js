function solve(arr) {

    let oddNumbers = arr.filter(e => arr.indexOf(e) % 2 != 0);

    let doubleNumbers = oddNumbers.map(e => e * 2);
    
    let reversedNumbers = doubleNumbers.reverse();
    console.log(reversedNumbers.join(' '));


    // let result = arr
    //         .filter((e, i) => i % 2 != 0)
    //         .map(e => e * 2)
    //         .reverse();

    // console.log(result.join(' '));

}

solve([10, 15, 20, 25]);