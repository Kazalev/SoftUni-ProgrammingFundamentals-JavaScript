function solve(groupOfPeople, typeOfTheGroup, dayOfTheWeek){

    let totalPrice = 0;
    let discountPrice = 0;
    let free = 0;

    if (typeOfTheGroup == "Students"){
        if (dayOfTheWeek == "Friday"){
            price = 8.45;
        } else if (dayOfTheWeek == "Saturday"){
            price = 9.80;
        } else if (dayOfTheWeek == "Sunday"){
            price = 10.46;
        }
        totalPrice = price * groupOfPeople;

        if(groupOfPeople >= 30){
            price *= groupOfPeople;
            discountPrice = price * 0.15;
            totalPrice = price - discountPrice;
        }
        console.log("Total price: " + totalPrice.toFixed(2));
        
    } else if (typeOfTheGroup == "Business"){
        if (dayOfTheWeek == "Friday"){
            price = 10.90;
        } else if (dayOfTheWeek == "Saturday"){
            price = 15.60;
        } else if (dayOfTheWeek == "Sunday"){
            price = 16;
        }
        totalPrice = price * groupOfPeople;

        if (groupOfPeople >= 100){
            free = 10 * price;
            totalPrice -= free
        }
        console.log("Total price: " + totalPrice.toFixed(2));

    } else if (typeOfTheGroup == "Regular"){
        if (dayOfTheWeek == "Friday"){
            price = 15;
        } else if (dayOfTheWeek == "Saturday"){
            price = 20;
        } else if (dayOfTheWeek == "Sunday"){
            price = 22.50;
        }
        totalPrice = price * groupOfPeople;

        if (groupOfPeople >= 10 && groupOfPeople <= 20){
            price *= groupOfPeople;
            discountPrice = price * 0.05;
            totalPrice = price - discountPrice;
        }
        console.log("Total price: " + totalPrice.toFixed(2));
    }
}

solve(40, "Regular", "Saturday");