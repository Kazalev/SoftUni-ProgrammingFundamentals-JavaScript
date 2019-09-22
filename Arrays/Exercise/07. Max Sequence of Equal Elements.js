function solve(arr){
    let indexOfBiggestSeq = -1;
    let maxSeqLength = 0;

    for(let i = 0; i < arr.length; i++){
        let currentEl = arr[i];
        let currentSeqLength = 1;

        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = arr[j];

            if(currentEl !== nextEl){
                break;
            }

            currentSeqLength++;
        }

        if(currentSeqLength > maxSeqLength){
            maxSeqLength = currentSeqLength;
            indexOfBiggestSeq = i;
        }
    }

    let element = arr[indexOfBiggestSeq];
    console.log(`${element} `.repeat(maxSeqLength));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);