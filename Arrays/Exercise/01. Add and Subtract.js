function solve(originalArr){
    let modifiedArr = [];

    for(let i = 0; i < originalArr.length; i++){
        let currentEl = originalArr[i];


        if (currentEl % 2 === 0){
            modifiedArr.push(currentEl + i);
        } else {
            modifiedArr.push(currentEl - i);
        }
    }

    console.log(modifiedArr);
    let originalArrSum = 0;
    for(let num of originalArr){
        originalArrSum += num;
    }

    let modifiedArrSum = 0;
    for(let num of modifiedArr){
        modifiedArrSum += num;
    }

    /* for (let index in originalArr) {
        let firstElement = originalArr[index];
        let secondElement = modifiedArrp[index];
    } и това работи */

    console.log(originalArrSum);
    console.log(modifiedArrSum);

}

solve([5, 15, 23, 56, 35]);