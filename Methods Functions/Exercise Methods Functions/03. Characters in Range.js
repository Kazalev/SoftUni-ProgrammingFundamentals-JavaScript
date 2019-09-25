function solve(firstChar, secondChar){

    let firstCode = firstChar.charCodeAt(0);
    let secondCode = secondChar.charCodeAt(0);

    let start = Math.min(firstCode, secondCode);
    let end = Math.max(firstCode, secondCode);

    let characters = [];

    for(let i = start + 1; i < end; i++){
        let currentCharacter = String.fromCharCode(i);

        characters.push(currentCharacter);
    }

    console.log(characters.join(' '));
}

solve('#', ':');