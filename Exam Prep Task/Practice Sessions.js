function solve(input){

    let arr = {};
    let racers = [];

    for(let line of input){
        let [ command, currentRoad, racer, nextRoad ] = line.split('->');
        
        if(command === 'Add'){
            if (!arr[currentRoad]){
                racers = [];
                arr[currentRoad] = racers;
                racers.push(racer);
            } else if (arr[currentRoad]) {
                arr[currentRoad].push(racer);
            }
        } else if(command === 'Move'){
            if(arr[currentRoad]){
                let index = arr[currentRoad].indexOf(racer);
                if(index !== -1){
                    let racerToMove = arr[currentRoad].splice(index, 1).shift();
                    arr[nextRoad].push(racerToMove);
                }
            }
        } else if(command === 'Close'){
            if(arr[currentRoad]){
                delete arr[currentRoad];
            }
        }
    }

    //console.log(Object.entries(arr));
    
    console.log(`Practice sessions:`);
    let sortedRoads = Object.entries(arr).sort((a, b) => {

        let c = b[1].length;
        let d = a[1].length;
        if (c !== d) {
            return c - d;
        } else {
            a = a[0];
            b = b[0];
            return a.localeCompare(b);
        }
    }).forEach(element => {
        console.log(element[0]);
        let racers = element[1];
        racers.forEach(racer => {
            console.log(`++${racer}`);
        })
    });
}

solve([ 
    'Add->Glencrutchery Road->Giacomo Agostini',
    'Add->Braddan->Geoff Duke',
    'Add->Peel road->Mike Hailwood',
    'Add->Glencrutchery Road->Guy Martin',
    'Move->Glencrutchery Road->Giacomo Agostini->Peel road',
    'Close->Braddan',
    'END' 
    ]);