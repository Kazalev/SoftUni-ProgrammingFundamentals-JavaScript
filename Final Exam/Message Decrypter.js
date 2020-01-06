function solve(input){

    let n = input.shift();
    let decryptedCode = '';

    for(let line of input){
        let pattern = /^([$%])([A-Z][a-z]{2,})\1:\s(\[\d+\]\|)(\[\d+\]\|)(\[\d+\]\|)$/gm;
        let matcher = pattern.exec(line);

        if(matcher !== null){
            let name = matcher[2];

            let nums = matcher.slice(3);
            decryptedCode = '';

            for(let i = 0; i < nums.length; i++){
                let currentElement = nums[i];
                let splitedNum = currentElement.split('[').join().split(']').join().split('|').join().split(',');
                let num = Number(splitedNum[1]);

                let charBuffer = String.fromCharCode(num);
                decryptedCode += charBuffer;
            }
            console.log(`${name}: ${decryptedCode}`);
        } else {
            console.log(`Valid message not found!`);
        }
    }
    
}

solve([
'4',
'$Request$: [73]|[115]|[105]|',
'%Taggy$: [73]|[73]|[73]|',
'%Taggy%: [118]|[97]|[108]|',
'$Request$: [73]|[115]|[105]|[32]|[75]|'
]);