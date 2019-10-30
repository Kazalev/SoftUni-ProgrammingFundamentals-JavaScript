function solve(input){

    let heroes = [];

    input.forEach((line) => {
        let [ heroName, level, items ] = line.split(' / ');
        //Array
        items = items.split(', ');
        items.sort((a, b) => a.localeCompare(b));

        let hero = {
            name: heroName,
            level: Number(level),
            items: items
        };

        heroes.push(hero);
    });

    heroes.sort((a, b) => a.level - b.level);

    for(let hero of heroes){
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);