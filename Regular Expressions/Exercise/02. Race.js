function solve(arr){

    let participants = arr
        .shift()
        .split(', ');

    let results = {};

    arr.forEach((line) => {
        let namePattern = /[A-Za-z]/gm;
        let distancePattern = /[\d]/gm;
        
        let name = line
            .match(namePattern)
            .join('');
        
        if(participants.includes(name)){
            let distance = line
                .match(distancePattern)
                .reduce((a, b) => +a + +b);

            if(!results[name]){
                results[name] = 0;
            }

            results[name] += distance;
        }
    });

    let topThree = Object.keys(results)
        .sort((a, b) => results[b] - results[a])
        .slice(0, 3)
        .forEach((participant, i) => {

            let p = '';

            switch(i){
                case 0:
                    p = 'st';
                    break;
                case 1:
                    p = 'nd';
                    break;
                case 2:
                    p = 'rd';
                    break;
            }

            console.log(`${i + 1}${p} place: ${participant}`);
        });
}

solve([ 
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race' 
    ]);