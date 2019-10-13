function solve(input){

    for(let i = 0; i < input.length; i++){
        let name = input[i];
        let person = {
            name: name
        }
        let entries = Object.entries(person); //Returns array of all properties and their values of an object
            for(let pair of entries){
            console.log(`Name: ${pair[1]} -- Personal Number: ${pair[1].length}`);
            }
    }
}

solve(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);