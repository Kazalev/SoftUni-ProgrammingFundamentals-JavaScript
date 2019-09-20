function solve(arr1, arr2){
    let arr3 = [];

    for(let i = 0; i < arr1.length; i++){
        let firstEl = arr1[i];
        let secondEl = arr2[i];

        if(i % 2 === 0){
            arr3.push(Number(firstEl)+ Number(secondEl));
        } else {
            arr3.push(firstEl + secondEl);
        }
    }
 
/*  let output = '';
    for(let index in arr3){
        let i = Number(index);
        let num = arr3[i];
        if(i !== arr3.length - 1){
            output += num + ' - ';
        } else {
            output += num;
        }
    } това реално е join() */

    console.log(arr3.join(' - '));
}

solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
);