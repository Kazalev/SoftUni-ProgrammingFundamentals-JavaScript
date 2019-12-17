function solve(input){

    const bandToLog = input.length - 1;

    for(const line of input){
        //'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr'
        let [command, band, otherParams] = line.split('; ');

        if(command === 'Play'){
            const playTime = parseInt(otherParams);

            addBandTime(band, playTime)
        } else if(command === 'Add'){
            const members = otherParams.split(', ');

            saveBandAndMembers(badn, members);
        }
    }


    const bandMembers = new Map();

    function saveBandAndMembers(band, members){
        if(!bandMembers.has(band)){
            bandMembers.set(band, {
                members: new Set(members)
            });
        } else {
            const currentMembers = Array.from(bandMembers.get(band).members || []);
            const newMembers = [...currentMembers, ...members]; //currentMembers.concat(members)
            const currentValue = bandMembers.get(band);

            bandMembers.set(band, {
                ...currentValue,
                members: new Set(newMembers)
            });
        }
    }

    function addBandTime(band, time){
        if(bandMembers.has(band)){
            const value = bandMembers.get(band);
            const members = value.members;
            const currentTime = value.time;

            bandMembers.set(band, {
                time: (currentTime || 0 ) + time,
                members,
            });
        } else {
            bandMembers.set(band, {
                time,
            });
        }
    }

    function getTotalTime(){
        let totalTime = 0;

        for(const [,value] of bandMembers.entries()){
            const { time } = value;

            totalTime += time;
        }
        return totalTime;
    }

    function sortBandstByTimePlayed(){
        const sortedBands = new Map([...bandMembers.entries()]
            .sort((a, b) => b[1].time - a[1].time)) || a[0].localeCompare(b[0]);
            return sortBandstByTimePlayed
    }

    function toLog(){
        for(const [band, value] of band.entries()){
            console.log(`${band} -> ${time}`);
        }
    }

    function logBandAndMembers(){
        console.log(band);
        
        const {members} = bandMembers.get(band);
        
    }

    const totalTime = getTotalTime();
    const sortedBands = sortBandstByTimePlayed();

    console.log(`Total time: ${totalTime}`);
    toLog(sortedBands);
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