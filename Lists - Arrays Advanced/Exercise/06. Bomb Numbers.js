function solve(arr, command){

    let [ target, power ] = command;

    for(let i = 0; i < arr.length; i++){
        let currentNum = arr[i];

        if(currentNum === target){
            let start = Math.max(0, i - power);
            let end = Math.min(i + power, arr.length - 1);

            for(let j = start; j <= end; j++){
                arr[j] = 0;
            }
        }
    }

    
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);
}

solve(
    [1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
);