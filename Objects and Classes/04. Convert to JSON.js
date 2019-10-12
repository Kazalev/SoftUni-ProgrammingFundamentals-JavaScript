function solve(name, lastName, hairColor){

    let person = {  //Вземаме входа и го трансформираме в обект
        name,
        lastName,
        hairColor
    };

    console.log(JSON.stringify(person)); //Правим обекта JSON формат
}

solve('George', 'Jones', 'Brown');