function solve(input){

    let animals = {}; //Key -> String, Value -> Number
    let areas = {}; //Key -> String, Value -> String[]

    for(let line of input){
        if (line === 'Last Info'){
            break;
        }

        let [ command, animalName, food, area ] = line.split(':');

        if(command === 'Add'){
            addAnimal(animalName, food, area);
        } else {
            feedAnimal(animalName, food, area);
        }
    }

    let sortedAnimals = Object.entries(animals).sort(sortAnimals);
    console.log(`Animals:`);
    for(let [ animalName, food] of sortedAnimals){
        console.log(`${animalName} -> ${food}g`);
    }

    let sortedAreas = Object.entries(areas).sort(sortAreas);
    console.log(`Areas with hungry animals:`);
    for(let [name, animals] of sortedAreas){
        if(animals.length !== 0){
            console.log(`${name} : ${animals.length}`);
        }
    }

    function addAnimal(animalName, foodLimit, area){
        foodLimit = Number(foodLimit);

        if(!animals.hasOwnProperty(animalName)){
            animals[animalName] = foodLimit;
        } else {
            animals[animalName] += foodLimit;
        }

        if(!areas.hasOwnProperty(area)){
            areas[area] = [ animalName ];
        } else {
            let animalsInArea = areas[area];

            if(!animalsInArea.includes(animalName)){
                animalsInArea.push(animalName);
            }
        }
    };

    function feedAnimal(animalName, food, area){
        food = Number(food);
        if(animals.hasOwnProperty(animalName)){
            animals[animalName] -= food;
        }

        if(animals[animalName] <= 0){
            console.log(`${animalName} was successfully fed`);
            delete animals[animalName];

            let animalsInArea = areas[area];
            let indexofAnimal = animalsInArea.indexOf(animalName);
            animalsInArea.splice(indexofAnimal, 1);
        }
    };

    function sortAnimals(a, b){
        // 0 -> key -> name
        // 1 -> value -> food
        let aAnimalFood = a[1];
        let bAnimalFood = b[1];

        let result = bAnimalFood - aAnimalFood;
        if(result === 0){
            // sort by second criteria
            let aAnimalFood = a[0];
            let bAnimalFood = b[0];

            return aAnimalFood.localeCompare(bAnimalFood);
        }

        return result;

        // return b[1] - a[1] || a[0].localeCompare(b[0]);
    };

    function sortAreas(a, b) {
        // 0 -> key - string
        // 1 -> value - String[]
        let aAnimalsCount = a[1].length;
        let bAnimalsCount = b[1].length;

        return bAnimalsCount - aAnimalsCount;
    };
}

solve([
'Add:Maya:7600:WaterfallArea',
'Add:Bobbie:6570:DeepWoodsArea',
'Add:Adam:4500:ByTheCreek',
'Add:Jamie:1290:RiverArea',
'Add:Gem:8730:WaterfallArea',
'Add:Maya:1230:WaterfallArea',
'Add:Jamie:560:RiverArea',
'Feed:Bobbie:6300:DeepWoodsArea',
'Feed:Adam:4650:ByTheCreek',
'Feed:Jamie:2000:RiverArea',
'Last Info' ]);