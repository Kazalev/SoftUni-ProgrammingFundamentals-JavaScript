function solve(input){

    let resultAdd = {};
    let resultPlay = {};
    let totalTime = 0;
    let bandToLog = 0;

    input.forEach((line) => {
        let [ command, band, memberTime ] = line.split('; ');
        if(command === 'Add'){
            if(!resultAdd.hasOwnProperty(band)){
                resultAdd[band] = {};
                resultAdd[band] = memberTime;
            } else {
                let oldMembers = resultAdd[band];
                resultAdd[band] = resultAdd.memberTime + ', ' + oldMembers; // undefined
            }

        } else if(command === 'Play'){
            memberTime = Number(memberTime);
                if(!resultPlay.hasOwnProperty(band)){  //ПРОВЕРКА ДАЛИ ВЕЧЕ ИМА ТАКАВА БАНДА !!!
                    resultPlay[band] = {};
                    resultPlay[band] = memberTime;
                } else {
                    let oldTime = resultPlay[band]; // ???
                    resultPlay[band] = memberTime += oldTime;
                }

                totalTime += memberTime;
        } else if((command in resultPlay) === true){
            bandToLog = command;
        }
    });

    let sorted = Object.entries(resultPlay);
    sorted.sort((b, a) => a[0].localeCompare(b[0]));



    console.log(`Total time: ${totalTime}`);
    for(let elem of sorted){
        console.log(`${elem[0]} -> ${elem[1]}`);
    }
    console.log(bandToLog);

    let names = Object.entries(resultAdd);
    console.log(names[2][1]);

}

solve([ 
    'Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Play; The Rolling Stones; 4239',
    'start of concert',
    'The Rolling Stones'
    ]);