function solve(radius, height){

    const pi =  3.14159265359;
    let volume = (1/3)*pi*Math.pow(radius, 2)*height;
    let s = Math.sqrt(Math.pow(radius, 2) + (Math.pow(height, 2)));
    let L = pi * radius * s;
    let B = pi * Math.pow(radius, 2);
    let A = L + B;
    
    let area = A;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${A.toFixed(4)}`);
}

solve(3, 5)