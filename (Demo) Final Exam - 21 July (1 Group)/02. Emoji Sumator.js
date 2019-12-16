function solve(input){

    let pattern = /(?<=\s):([a-z]{4,}):(?=[\s,.!?])/gm;
    let [ text, encryptedEmoji ] = input;
    let decryptedEmoji = decryptEmoji();
    let allEmojies = [];
    let totalPower = 0;

    let matches = pattern.exec(text);

    while(matches !== null){
        let [ emoji, emojiLetters ] = matches;
        let currentPower = sumAsciiCode(emojiLetters);
        totalPower += currentPower;
        allEmojies.push(emoji);

        matches = pattern.exec(text);
    }

    if(allEmojies.includes(decryptedEmoji)){
        totalPower *= 2;
    }

    if(allEmojies.length > 0){
        console.log(`Emojis found: ${allEmojies.join(', ')}`);
    }
    console.log(`Total Emoji Power: ${totalPower}`);

    function sumAsciiCode (emoji) {
        let sum = 0;

        for(let i = 0; i < emoji.length; i++){
            let asciiCode = emoji.charCodeAt(i);
            sum += asciiCode;
        }

        return sum;
    };

    function decryptEmoji() {
        let output = ':';
        let numbers = encryptedEmoji.split(':').map(Number);
        
        for(let num of numbers){
            output += String.fromCharCode(num);
        }

        return output + ':';
    };
}

solve([ 
    'Hello I am Mark from :England: and I am :one: :seven: years old, I have a :hamster: as pet.',
    '115:101:118:101:110'
    ]);