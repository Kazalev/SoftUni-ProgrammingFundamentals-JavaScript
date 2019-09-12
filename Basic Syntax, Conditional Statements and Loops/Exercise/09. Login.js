function solve(input){

    let username = input[0];
    let reversedUsername = '';

    for(let i = username.length - 1; i >= 0; i--){
        reversedUsername += username[i];
    }

    for(let index = 1; index < input.length; index++){
        if(input[index] !== reversedUsername){
            if(index === 4){
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log(`Incorrect password. Try again.`);
        } else {
            console.log(`User ${username} logged in.`);
            break;
        }
    }
}

solve(['Acer','login','go','let me in','recA'])