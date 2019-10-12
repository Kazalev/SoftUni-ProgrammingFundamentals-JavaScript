function solve(arr, command){

    let counter = 0;
    let firstArr = arr.slice(0, command[0]);
    let secondArr = firstArr.splice(0, command[1]);
    let thirdArr = firstArr.filter(isContainsNum);

    function isContainsNum(num){
        return num === command[2];
    }

    for(let i = 0; i < thirdArr.length; i++){
        counter++
    }

    console.log(`Number ${command[2]} occurs ${counter} times.`);
}

solve(
    [5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    );