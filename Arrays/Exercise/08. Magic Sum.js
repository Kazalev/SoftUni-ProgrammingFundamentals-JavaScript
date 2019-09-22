function solve(arr, magicSum){

    for(let i = 0; i < arr.length; i++){
        let currentEl = arr[i];

        for(let j = i + 1; j < arr.length; j++){
            let nextEl = arr[j];

            if(currentEl + nextEl === magicSum){
                console.log(`${currentEl} ${nextEl}`);
            }
        }
    }
}

solve([1, 7, 6, 2, 19, 23],8);