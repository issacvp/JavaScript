/*const countConstruct = (target, wordBank) => {
    if (target === '') return 1;
    var count = 0;
    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            count = count + countConstruct(suffix, wordBank);
        }
    }
    return count;
}*/

/*const countConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if (target === '') return 1;
    var count = 0;
    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            count = count + countConstruct(suffix, wordBank, memo);
        }
    }
    memo[target] = count;
    return count;
}*/


function countConstruct(target, wordBank) {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;
    for (let i = 0; i <= target.length; i++) {
        if (table[i] > 0) {
            for (let word of wordBank) {
                //if the word matches the characters starting at position i
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] += table[i];
                }
            }
        }
    }
    return table[target.length];
};

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // 2