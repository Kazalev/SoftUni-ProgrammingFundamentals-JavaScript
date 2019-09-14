function solve(num){
    let numAsString = num.toString(); //Convert number to string
    let sum = 0;

    for(let i = 0; i < numAsString.length; i++){ //Iterate (for cicle) through string
        let digit = Number(numAsString[i]); //Convert symbol to number
        sum += digit; //Add to sum
    }

    console.log(sum);
}

solve(245678)