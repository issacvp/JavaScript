/*

const canSum = (targetSum, values) => {
    if(targetSum == 0) return true;
    if(targetSum < 0) return false;

    for(let num of values) {
        const remainder = targetSum - num;
        if(canSum(remainder, values)===true){
            return true;
        }
    }
    return false;
}

*/

/*const canSum = (targetSum, values, memo={}) => {
    if(targetSum in memo) return memo[targetSum];

    if(targetSum == 0) return true;
    if(targetSum < 0) return false;


    for(let num of values) {
        const remainder = targetSum - num;
        if(canSum(remainder, values, memo)===true){
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}*/

const canSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] === true) {
            for (let num of numbers) {
                if (i + num <= targetSum)
                    table[i + num] = true;
            }
        }
    }
    return table[targetSum];
}
console.log(canSum(7, [5,3,4]));