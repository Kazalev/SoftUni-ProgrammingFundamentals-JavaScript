function solve(startingYield){
    let totalAmount = 0;
    let days = 0;
    let consumeByWorkers = 26;
    let yieldDrop = 10;

    while(startingYield >= 100){
        totalAmount += startingYield - consumeByWorkers;
        startingYield -= 10;
        days++;
    }

    if(totalAmount >= 26){
        totalAmount -= 26;
    }

    console.log(days);
    console.log(totalAmount);   
}

solve(111)