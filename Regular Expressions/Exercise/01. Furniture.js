function solve(arr){

    console.log(`Bought furniture:`);
    let totalSum = 0;
    
    arr.forEach((line) => {
        const pattern = />>(?<name>[A-Za-z]+)<<(?<price>[0-9]+[.]?[0-9]*)!(?<quantity>[\d]*)/gm;

        let result = pattern.exec(line);

        if(result){
            let currentSum = Number(result.groups.price) * Number(result.groups.quantity);
            totalSum += currentSum;
            console.log(result.groups.name);
        }
    });

    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

solve([ '>>Sofa<<312.23!3',
        '>>TV<<300!5',
        '>Invalid<<!5',
        'Purchase' 
    ]);