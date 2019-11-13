function solve(input){

    let result = new Map();
    let neighborhoods = input
        .shift()
        .split(', ');

    neighborhoods.forEach(n => result.set(n, [])); // Пъхаме всички квартали в мапа

    for(let line of input){
        let [ neighborhood, name ] = line.split(' - ');

        if(neighborhoods.includes(neighborhood)){

            if(result.has(neighborhood)){
                let people = result.get(neighborhood);
                people.push(name);
                
                result.set(neighborhood, people);
            }
        }
    }
    
    let output = [...result.entries()]; //Правим масив от масиви и key -> value pairs
    output.sort((a, b) => b[1].length - a[1].length);
    
    for(let [kvartal, hora] of output){
        console.log(`${kvartal}: ${hora.length}`);

        for(let chuek of hora){
            console.log(`--${chuek}`);
        }
    }
}

solve([
'Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy'
]);