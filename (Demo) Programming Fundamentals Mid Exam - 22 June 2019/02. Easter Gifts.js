function solve(arr){

    let gifts = arr.shift().split(' ');
    let result = [];

    for(let i = 0; i < arr.length; i++){
        let [ command, gift, index ] = arr[i].split(' ');
        index = Number(index);

        if(command === 'OutOfStock'){

            if(gifts.includes(gift)){ //Проверка за даден елемент и заманя с друг независимо колко пъти го има!
                for (let j = 0; j < gifts.length; j++) {
                    if (gifts[j] === gift)
                    gifts[j] = 'None';
                }
            }

        } else if(command === 'Required'){

            if(index >= 0 && index < gifts.length){
                gifts[index] = gift;
            }

        } else if(command === 'JustInCase'){

            gifts.pop()
            gifts.push(gift);

        } else {
            break;
        }
    }

    for(let j = 0; j < gifts.length; j++){ //същото като filter()
        let currentElement = gifts[j];
        if(currentElement === 'None'){
            gifts.splice(j, 1);
        }
    }

    result = gifts.filter((n) => n !== 'None');

    console.log(gifts.join(' '));
}

solve(
    ['Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes',
        'Required Paper 8',
        'OutOfStock Clothes',
        'Required Chocolate 2',
        'JustInCase Hat',
        'OutOfStock Cable',
        'No Money']);