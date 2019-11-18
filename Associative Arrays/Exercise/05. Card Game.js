function solve(input){

    let cardPowers = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };

    let cardTypes = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    };

    let players = {};

    for(let line of input){
        let [ name, cards ] = line.split(': ');
        cards = cards.split(', ');
        if(!players.hasOwnProperty(name)){
            let uniqueCards = new Set(cards);
            uniqueCards = [...uniqueCards];
            players[name] = uniqueCards;
        } else {
            for(let card of cards){
                let doesNotContain = !players[name].includes(card);
                if(doesNotContain){
                    players[name].push(card);
                }
            }
        }
    }

    for(let name in players){
        let deck = players[name];
        let sum = 0;

        for(let card of deck){
            let tokens = card.split('');

            if(tokens.length === 2){
                sum += calculateProduct(tokens[0], tokens[1]);
            } else {
            sum += calculateProduct(tokens[0] + tokens[1], tokens[2]);
            }
        }
        console.log(`${name}: ${sum}`);
    }

    function calculateProduct(power, type){
        let cardPowerMultiplier = cardPowers[power];
        let cardTypeMultiplier = cardTypes[type];

        return cardPowerMultiplier * cardTypeMultiplier;
    }
}

solve([
'Peter: 2C, 4H, 9H, AS, QS',
'Tomas: 3H, 10S, JC, KD, 5S, 10S',
'Andrea: QH, QC, QS, QD',
'Tomas: 6H, 7S, KC, KD, 5S, 10C',
'Andrea: QH, QC, JS, JD, JC',
'Peter: JD, JD, JD, JD, JD, JD'
]);