function solve(number, float){
    if (float > 15){
        float = 15;
    }
    let result = parseFloat(number.toFixed(float));
    console.log(result);   
}

solve(10.598652187386712372813123, 16);