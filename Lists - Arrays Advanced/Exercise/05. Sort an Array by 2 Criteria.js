function solve(arr){

    let sorted = arr.sort(sortNames);
    console.log(sorted.join('\n'));

    function sortNames(a, b) {
        let firstCriteria = a.length - b.length;

        if(firstCriteria === 0) {
            return a.localeCompare(b);
        }

        return firstCriteria;
    }
}

solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);