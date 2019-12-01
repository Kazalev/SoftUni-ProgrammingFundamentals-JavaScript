function solve(input){

    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let validNames = [];
    let validName = null;
    
    while((validName = regex.exec(input)) !== null){
        validNames.push(validName[0]);
    }

    console.log(validNames.join(' '));
}

solve('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov');