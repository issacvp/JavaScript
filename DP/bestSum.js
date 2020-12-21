/*const bestSum = (targetSum, numbers) => {
    if (targetSum ===0) return [];
    if (targetSum <0) return null;

    let shortestCombination = null;
    for(let num of numbers) {
        const remainder = targetSum-num;
        const remainderCombination = bestSum(remainder, numbers);
        if(remainderCombination !==null) {
            const combination = [...remainderCombination, num];
            if(shortestCombination ===null || combination.length < shortestCombination.length) {
                shortestCombination = combination
            }
        }
    }
    return shortestCombination;
}; */

/* const bestSum = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if (targetSum ===0) return [];
    if (targetSum <0) return null;

    let shortestCombination = null;
    for(let num of numbers) {
        const remainder = targetSum-num;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if(remainderCombination !==null) {
            const combination = [...remainderCombination, num];
            if(shortestCombination ===null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return shortestCombination;
}; */

function bestSum(targetSum, numbers) {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];
    let count = 0;
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                if (i + num <= targetSum) {
                    if (table[i+num] !== null) {
                        var tempArr = table[i+num];
                        var newArr = [num, ...table[i]];
                        if (newArr.length < tempArr.length) {
                            table[i+num] = newArr;
                        }
                    } else {
                        table[i+num] = [num, ...table[i]];
                    }
                }
            }
        }
    }
    return table[targetSum];
};

console.log(bestSum(7,[5,3,4,7])); //[7]
console.log(bestSum(8,[2,3,5]));//[3,5]
console.log(bestSum(8,[1,4,5]));//[4,4]
console.log(bestSum(100,[1,2,5,25]));//[25,25,25,25]
tconsole.log(bestSum(8, [2, 3, 5]));this.