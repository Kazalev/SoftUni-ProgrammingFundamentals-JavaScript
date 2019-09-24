function pow(num, base){

    return num ** base;
    return Math.pow(num, base); // друго решение
}

// Function expression
let secondPow = function(num, base){
    return num ** base;
}  

// Arrow/Lambda function
let thirdPow = (num, base) => {
    return num ** base;
}

console.log(pow(2, 3));
