function num_ways(remainder) {
    if(remainder === 0 || remainder === 1) return 1;
    return num_ways(remainder -1) + num_ways(remainder-2);
}

function num_ways_memo(remainder, memo={}) {
    if(memo[remainder]) return memo[remainder];
    if(remainder === 0 || remainder === 1) return 1;
    memo[remainder] = num_ways(remainder -1, memo) + num_ways(remainder-2, memo);
    return memo[remainder];
}

function num_ways_iter(steps) {
    const nums = [];
    nums[0] = 1;
    nums[1] = 1;
    for(let i=2; i <= steps; i++) {
        nums[i] = nums[i-1]+nums[i-2];
    }
    return nums[steps];
}

function num_ways_iter_space(steps) {
    let num1 = 1;
    let num2 = 1;
    let num3 = 0;
    if(steps === 0) return num1;
    if(steps === 1) return num2;

    for(let i=2; i <= steps; i++) {
        num3 = num2+num1;
        num1 = num2;
        num2 = num3;
    }
    return num3;
}

let steps = 100;
//console.log(num_ways(steps));
//console.log(num_ways_memo(steps));
console.log(num_ways_iter(steps));
console.log(num_ways_iter_space(steps));