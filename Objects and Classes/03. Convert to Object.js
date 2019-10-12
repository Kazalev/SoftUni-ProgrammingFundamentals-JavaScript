function solve(jsonStr){

    let person = JSON.parse(jsonStr);       //Convert JSON String in to Object

    let entries = Object.entries(person);   //Returns array of all properties and their values of an object

    for(let [key, value] of entries){       //Обикаля всяка една двойка key: value
        console.log(`${key}: ${value}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');