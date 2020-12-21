function combinations (elements) {
    //base case 
    if(elements.length===0) return [[]];
    const combsWithOutFirst = combinations(elements.slice(1));
    const combsWithFirst = [];
    combsWithOutFirst.forEach(comb => {
        const combWithFirst = [...comb,elements[0]];
        combsWithFirst.push(combWithFirst);
    });
    return [...combsWithOutFirst, ...combsWithFirst];
};

/*
Complexity : 
    Time : 
        O(2^n)
    Space : 
        O(n^2)
*/

console.log(combinations(['a','b','c']));