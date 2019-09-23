function solve(input){

    let step = Number(input.slice(-1)[0]); //Взема последния елемент от масив
    let n = input[input.length - 1]; //Това също
    input.pop();

    let currentElement = [];
    for(let i = 0; i < input.length; i+=step){
        currentElement.push(input[i]);
    }
    console.log(currentElement.join(' '));
}

solve(['5', '20', '31', '4', '20', '2']);