function solve(arr){

    let topIntegers = [];

    for(let i = 0; i < arr.length; i++){
        let currentEl = arr[i];
        let isTopIntefer = true;

        for(let j = i + 1; j < arr.length; j++){
            let nextEl = arr[j];

            if(currentEl <= nextEl) {
                isTopIntefer = false;
                break;
            }
        }

        if (isTopIntefer === true){
            topIntegers.push(currentEl);
        }
    }
    console.log(topIntegers.join(' ')); 
}

solve([14, 24, 3, 19, 15, 17]);