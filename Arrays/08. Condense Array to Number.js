function solve(nums){
    let condensed = [];
    let sum = 0;

    while(nums.length > 1){
        for(let i = 0; i < nums.length - 1; i++){
            condensed.push(nums[i] + nums[i + 1]);
        }

        nums = condensed.slice();
        condensed = [];
    }
    console.log(nums[0]);
}

solve([5,0,4,1,2])