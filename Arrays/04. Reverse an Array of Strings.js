function solve(arr){

    for(let i = 0; i < arr.length / 2; i++){
        let higherEelement = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = higherEelement;
    }

    console.log(arr.join(' '));

    // arr.reverse();
    // console.log(arr.join(' '));
}

solve(['a', 'b', 'c', 'd', 'e']);