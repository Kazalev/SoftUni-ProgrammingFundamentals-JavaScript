function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armourPrice){
    let totalExpenses = 0;

    for(let fight = 1; fight <= lostFights; fight++){
        if(fight % 2 === 0){
            totalExpenses += helmetPrice;
        }

        if(fight % 3 === 0){
            totalExpenses += swordPrice;
        }

        if(fight % 6 === 0){
            totalExpenses += shieldPrice;
        }

        if(fight % 12 === 0){
            totalExpenses += armourPrice;
        }
    }

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

solve(7, 2, 3, 4, 5)