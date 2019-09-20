function solve(arr, rotations){

    rotations %= arr.length;
    while(rotations > 0){
    
        let firstEl = arr[0];
    
        for(let i = 0; i < arr.length - 1; i++){
            arr[i] = arr[i+1]; 
        }

        arr[arr.length - 1] = firstEl;

    rotations --;
    }
    console.log(arr.join(' '));
}

solve([51, 47, 32, 61, 21], 2);