function solve(input){

    for(let i = 0; i < input.length; i++){
        let [name, latitude, longitude] = input[i].split(' | ');

        let town = {
            town: name,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        console.log(town);
    }
}

solve(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);