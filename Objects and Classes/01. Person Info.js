function solve(firstName, lastName, age){
    
    let result = {                  //Вземаме входа и го трансформираме в обект
        firstName: firstName,
        lastName,                   //Това е съкратено на горното
        age: age
    };

    let entries = Object.entries(result); //Returns array of all properties and their values of an object

    for(let pair of entries){
        console.log(`${pair[0]}: ${pair[1]}`);
    }
}

solve("Peter", "Pan", "20");