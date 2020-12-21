/* const canConstruct = (target, wordBank) => {
    if (target === '') return true;
    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank) === true){
                return true;
            }
        }
    }
    return false;
}; */

/* const canConstruct = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target];
    if (target === '') return true;
    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank, memo) === true){
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}; */

function canConstruct(target, wordBank) {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;
    for (let i = 0; i <= target.length; i++) {
        if (table[i] === true) {
            for (let word of wordBank) {
                //if the word matches the characters starting at position i
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                }
            }
        }
    }
    return table[target.length];
};



console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eeee', 'eeeee', 'eeeeee']));  //false