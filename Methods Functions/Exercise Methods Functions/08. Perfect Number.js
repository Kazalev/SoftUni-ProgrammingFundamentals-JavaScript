function perfectNumber(num){

    let iterator = 0;
    let result = 0;
    for(let i = 1; i < num; i++){
        if(num % i === 0){
            iterator = i;
            result += i;
        }
    }
    
    if(result === num){
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }
}

perfectNumber(28);
perfectNumber(6);
perfectNumber(1236498);