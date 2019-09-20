function solve(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        let currentEl = arr1[i];

        for(let j = 0; j < arr2.length; j++){
            let nextEl = arr2[j];
    
            if (currentEl === nextEl){
                console.log(currentEl);
            }
        }
    }
}

solve(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']    
);