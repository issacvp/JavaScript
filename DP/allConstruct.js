/*const allConstruct = (target, wordBank) => {
    if (target === '') return [[]];
    var array = null;
    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            var tempArray = allConstruct(target.slice(word.length), wordBank);
            if(tempArray !== null){
                for(let a of tempArray){
                    a.push(word);
                }
                if(array !== null){
                    for(let a of tempArray){
                        array.push(a);
                    }
                } else {
                    array = tempArray;
                }
                
            }
        }
    }
    return array;
} */

/*const allConstruct = (target, wordBank) => {
    if (target === '') return [[]];
    var result = [];
    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank);
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }
    return result;
} */

/*const allConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if (target === '') return [[]];
    var result = [];
    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }
    memo[target] = result;
    return result;
}*/

function allConstruct(target, wordBank) {
    const table = Array(target.length + 1)
        .fill()
        .map(() => []);

    table[0] = [[]];

    for (let i = 0; i <= target.length; i++) {
        if (table[i].length > 0) {
            for (let word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    const newCombinations = table[i].map(subArray => [...subArray, word]);
                    table[i+word.length].push(...newCombinations);
                }
            }
        }
    }
    return table[target.length];
};


console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])); // 1
//console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2