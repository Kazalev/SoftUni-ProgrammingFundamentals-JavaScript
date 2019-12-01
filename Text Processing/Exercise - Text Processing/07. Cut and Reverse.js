function solve(text){

    var naiveReverse = function(string) {
        return string.split('').reverse().join('');
    }

    let firstHalf = text.slice(0, text.length / 2);
    let secondHalf = text.slice(text.length / 2, text.length);

    let reversedFirst = naiveReverse(firstHalf);
    let reversedSecond = naiveReverse(secondHalf);
    
    console.log(reversedFirst);
    console.log(reversedSecond);
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');