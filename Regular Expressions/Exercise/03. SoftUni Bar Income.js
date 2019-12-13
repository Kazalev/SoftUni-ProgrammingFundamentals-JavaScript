function solve(input){

    let totalIncome = 0;
    
    input.pop();

    input.forEach((string) => {
        let pattern = /%(?<name>[A-Z][a-z]+)%[^$%|.]{0,}<(?<product>[\w]+)>[\D^$%|.]{0,}\|(?<count>[0-9]+)\|[\D^$%|.]{0,}(?<price>[0-9]+|[0-9]+\.[0-9]+)\$/g

        let result = pattern.exec(string); //Use exec for groups (named or not)

        let currentSum = Number(result.groups.count) * Number(result.groups.price);
        totalIncome += currentSum;

        console.log(`${result.groups.name}: ${result.groups.product} - ${currentSum.toFixed(2)}`);
    });

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

solve([ 
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4',
    'end of shift'
    ]);