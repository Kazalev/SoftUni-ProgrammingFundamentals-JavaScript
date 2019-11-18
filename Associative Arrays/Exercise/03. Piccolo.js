function picolo(input){

    let carNumsMap = new Map();

    for(let currentCarNum of input){
        currentCarNum = currentCarNum.split(', ');
        let action = currentCarNum.shift();
        currentCarNum = currentCarNum.join('');

        if(action === 'IN'){
            carNumsMap.set(currentCarNum, 1);
        } else if(action === 'OUT'){
            carNumsMap.delete(currentCarNum);
        }
    }

    let sortedCarNumbers = [...carNumsMap].sort((a, b) => a[0].localeCompare(b[0]));

    if(sortedCarNumbers.length > 0){
        sortedCarNumbers.forEach(x => console.log(x[0]));
    } else {
        console.log(`Parking Lot is Empty`);
    }
}

picolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);