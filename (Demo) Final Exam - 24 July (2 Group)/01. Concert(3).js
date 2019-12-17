function solve(input) {
    let bands = {};
    let totalTime = 0;
 
    while ((line = input.shift()) !== 'start of concert') {
        let [command, name, membersOrTime] = line.split('; ');
        if (command === 'Add') {
            addBand(name);
            membersOrTime.split(', ').forEach(member => {
                if (!bands[name].members.includes(member)) {
                    bands[name].members.push(member);
                }
            });
        } else {
            let time = Number(membersOrTime);
            addBand(name);
            bands[name].time += time;
            totalTime += time;
        }
    }
    console.log(`Total time: ${totalTime}`);
    Object.entries(bands)
        .sort((a, b) => b[1].time - a[1].time || a[0].localeCompare(b[0]))
        .forEach(band => console.log(`${band[0]} -> ${band[1].time}`));
 
    let bandName = input.shift();
    console.log(bandName);
    Object.values(bands[bandName])[1].forEach(member => console.log(`=> ${member}`));
 
    function addBand(name) {
        if (!bands[name]) {
            bands[name] = {
                time: 0,
                members: []
            }
        }
    }
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