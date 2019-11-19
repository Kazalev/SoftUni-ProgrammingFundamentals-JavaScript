function solve(input) {

    let companies = {};

    for (let pair of input) {
        let [company, id] = pair.split(' -> ');

        if(!companies.hasOwnProperty(company)){
            companies[company] = [];
        }

        companies[company].push(id);
    }

    let sorted = Object.entries(companies);

    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for(let elem of sorted){
        console.log(elem[0]);
        let set = new Set(elem[1]);
        for(let number of set){
            console.log(`-- ${number}`);
        }
    }
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]);