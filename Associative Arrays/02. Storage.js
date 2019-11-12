function solve(input){

    let storage = new Map();

    for(let line of input){
        let [ item, quantityInput ] = line.split(' ');

        let quantity = Number(quantityInput);

        if(storage.has(item)){
            //storage.set(item, storage.get(item) + quantity);
            quantity += storage.get(item);
        }
            storage.set(item, quantity);
    }

    storage.forEach((k, v) => console.log(`${v} -> ${k}`));
}

solve([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);