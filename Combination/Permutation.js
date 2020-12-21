//A collection of elements where order matters 
// Given a set of n things , there are n! permutations
function permutation(elements) {
    if(elements.length ===0) return [[]];
    const firstEl = elements[0];
    const rest = elements.slice(1);
    const permsWithOutFirst = permutation(rest);
    const permutations = [];
    permsWithOutFirst.forEach(perm => {
        for(let i=0;i<=perm.length;i++){
            const permWithFirst = [...perm.slice(0,i),firstEl,...perm.slice(i)];
            permutations.push(permWithFirst);
        }
    });
    return permutations;
};

/*
Complexity : 
    Time : O(n!);
    Space : O(n*n)
        n stack
        n elements.slice
*/

console.log(permutation(['a','b','c']));
