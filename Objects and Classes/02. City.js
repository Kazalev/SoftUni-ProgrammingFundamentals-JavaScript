function solve(name, area, population, country, postCode){

    let city = {
        name: name,
        area: area,
        population,
        country,
        postCode
    };

    let entries = Object.entries(city);

    for(let pair of entries){
        console.log(`${pair[0]} -> ${pair[1]}`);
    }
}

solve('Sofia',' 492', '1238438', 'Bulgaria', '1000');