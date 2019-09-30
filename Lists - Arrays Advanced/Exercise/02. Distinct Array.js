function solve(arr) {

    let distinctArr = [];

    for(let i = 0; i < arr.length; i++){
        let indexOfEl = arr.indexOf(arr[i]);

        if(i === indexOfEl){
            distinctArr.push(arr[i]);
        }
    }

    console.log(distinctArr.join(' '));
}

solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);