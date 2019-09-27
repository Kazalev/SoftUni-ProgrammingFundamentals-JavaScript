function solve(num){

    let sum = num / 10;
    let load = '%'.repeat(sum);
    let rest = 10 - sum;
    let rest2 = '.'.repeat(rest);
    let statusBar = load + rest2;
    
    console.log(`${num}% [${statusBar}]`);
    if(num === 100){
        console.log('Complete!');
    } else {
        console.log('Still loading...');
    }
}

solve(21);