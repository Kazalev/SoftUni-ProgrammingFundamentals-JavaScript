let arr = ['one', 'two', 'three', 'four', 'five'];
let result = arr.filter(e => e.startsWith('t'));
console.log(result);


let arrNum = [1,2,3,4,5,6,7,8,9];
let newArr = arrNum.map(e => e * 2);
console.log(newArr);


let arrName = ['Pesho', 'Gosho', 'Stamat'];
let newNameArr = arrName.map(e => 'Mr. ' + e);
console.log(newNameArr);

let numbers = [10, 1, 2, 20, 32, 100, 3];
let names = ['Pesho', 'Nikol', 'Maria', 'Ivan'];

console.log(names.sort());
console.log(numbers.sort());
console.log(numbers.sort(function(a, b) { // подрежда числата правилно
    if(a > b){
        return 1;
    } else if (b > a){
        return -1;
    } else {
        return 0;
    }
}));
console.log(numbers.sort((a, b) => a - b )); // подрежда числата правилно - съкратен
console.log(numbers.sort((a, b) => b - a));  // низходящ ред
