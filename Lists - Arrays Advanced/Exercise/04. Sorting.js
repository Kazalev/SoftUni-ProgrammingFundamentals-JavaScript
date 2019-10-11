function solve(arr){
    
    let resultArr = [];
    let descArr = arr.sort((a, b) => b - a);
    
    for(let i = 0; i <= arr.length+10; i++){
        if(i % 2 === 0){
            let biggest = descArr.shift();
            resultArr.push(biggest);
        } else {
            let lowest = descArr.pop();
            resultArr.push(lowest);
        }
    }
    console.log(resultArr.join(' '));
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);