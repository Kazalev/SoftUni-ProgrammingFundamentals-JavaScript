function solve(arr){

    let paintNum = arr.shift().split(' ');
    
    for(let i = 0; i < arr.length; i++){
        let [ command, paintingNumber, changedNumber ] = arr[i].split(' ');

        if(command === 'Change'){

        } else if(command === 'Hide'){

            if(paintNum.includes(paintingNumber)){ //Проверка за даден елемент в масив
                let index = paintNum.indexOf(paintingNumber);
                paintNum.splice(index, 1);
            }
        } else if(command === 'Switch'){
            if(paintNum.includes(paintingNumber)) {
                
                let first = paintNum[1];
                let second = paintNum[2];

                swap(first, second);

                // let a = paintingNumber, b = changedNumber;
                // paintingNumber = b;
                // changedNumber = a;

                // let index = paintNum.indexOf(paintingNumber);

                // paintNum.splice(index, 0, changedNumber);
            }
        } else if(command === 'Insert'){

            if(paintingNumber >= 0 && paintingNumber < paintNum.length){
                paintingNumber = Number(paintingNumber);
                paintNum.splice(paintingNumber + 1, 0, changedNumber);
            }
        } else if(command === 'Reverse'){

        } else {
            break;
        }
    }

    function swap(paintingNumber, changedNumber){
        let indexOfFirst = paintNum.indexOf(paintingNumber);
        let indexOfSecond = paintNum.indexOf(changedNumber);

        if(indexOfFirst !== -1 && indexOfSecond !== -1){
            paintNum[indexOfFirst] = changedNumber;
            paintNum[indexOfSecond] = paintingNumber;
        }
    }

    console.log(paintNum.join(' '));
}

solve([ '115 115 101 114 73 111 116 75',
'Insert 5 114',
'Switch 116 73',
'Hide 75',
'Reverse ',
'Change 73 70',
'END' ]
);