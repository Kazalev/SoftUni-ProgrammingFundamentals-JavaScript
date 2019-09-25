function solve(input){

    for(let num of input){
        console.log(isPalindrome(num));
    }
    
    function isPalindrome(num){
        let reversedNum = '';
        let numAsStr = num.toString();

        for(let i = numAsStr.length - 1; i >= 0; i--){
            reversedNum += numAsStr[i];
        }

        return numAsStr === reversedNum;
    }
}

solve([123, 323, 421, 121]);