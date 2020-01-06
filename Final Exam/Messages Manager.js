function solve(input){

    let arr = {};
    let sendReceived = [];
    let counter = 0;

    let capacity = Number(input.shift());

    for(let line of input){
        let [ command, username, send, received ] = line.split('=');
        
        if(command === 'Add'){
            if(!arr[username]){
                sendReceived = [];
                arr[username] = sendReceived;
                sendReceived.push(send, received);
            }
        } else if(command === 'Message'){
            if(arr.hasOwnProperty(username) && arr.hasOwnProperty(send)){
                arr[username][0] = Number(arr[username][0]) + 1;
                arr[send][0] = Number(arr[send][0]) + 1;

                if(arr[username][0] === capacity){
                    console.log(`${username} reached the capacity!`);
                    delete arr[username];
                }
                if(arr[send][0] === capacity){
                    console.log(`${send} reached the capacity!`);
                    delete arr[send];
                }
            }
        } else if(command === 'Empty'){
            if(arr[username]){
                delete arr[username];
            } else if(username === 'All'){
                arr = '';
            }
        }
    }

    for(let key in arr){
        counter++;
    }
    console.log(`Users count: ${counter}`);
    
    let sortedMessages = Object.entries(arr).sort((a ,b) => {
        let c = b[1][1];
        let d = a[1][1];
        if( c !== d){
            return c - d;
        } else {
            a = a[0];
            b = b[0];
            return a.localeCompare(b);
        }       
    });
    

    sortedMessages.forEach((element) => {
        console.log(`${element[0]} - ${Number(element[1][0]) + Number(element[1][1])}`);
    });
}

solve([
    '10',
    'Add=Mark=5=4',
    'Add=Clark=3=5',
    'Add=Berg=9=0',
    'Add=Kevin=0=0',
    'Message=Berg=Kevin',
    'Statistics'
    ]);