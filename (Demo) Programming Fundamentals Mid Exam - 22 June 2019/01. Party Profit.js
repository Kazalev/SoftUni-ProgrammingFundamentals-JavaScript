function solve(input){

    let companions = input[0];
    let days = input[1];
    let coins = 0;

    for(let day = 1; day <= days; day++){

        if(day % 10 === 0){
            companions -= 2;
        }

        if(day % 15 === 0){
            companions += 5;
        }

        coins += (50 - (companions * 2));

        if(day % 3 === 0){
            coins -= 3 * companions;
        }

        if(day % 5 === 0){
            coins += 20 * companions;
        }

        if (day % 3 === 0 && day % 5 === 0){
            coins -= (companions * 2);
        }
    }
    console.log(`${companions} companions received ${Math.floor(coins / companions)} coins each.`);
}

solve([ '3', '5' ]);