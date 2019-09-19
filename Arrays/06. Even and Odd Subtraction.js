function solve(arr){

    for(let i = 0; i < arr.length; i++){
        arr[i] = Number(arr[i]);
    }

    let evenSum = 0;
    let oddSum = 0;

    for(let num of arr){
        if(num % 2 === 0){
            evenSum += num;
        } else {
            oddSum += num;
        }
    }


    console.log(evenSum - oddSum);
}

solve([2,4,6,8,10]);