/**
 * Write a function unique that takes in an array and returns a new array containing the unique elements
 * 
 */

// function unique(words) {
//     const array = [];
//     for (let word of words) {
//         if (!array.includes(word)) {
//             array.push(word);
//         }
//     }
//     return array;
// }


// Complexity 
//  time : for of loop --> word.length 
//         includes  --> word.length 
//         O(n^2)
//  space : O(n) 

function unique(words) {
    var uniqueWords = new Set();
    for(let word of words) {      // n 
        uniqueWords.add(word);   //Constat time 
    }
    return Array.from(uniqueWords);
}

// // Complexity : 
//     Time : O(n)  because inserting into set is contant 
//     Space : O(n) (set)  + O(n) (convestion of set to Array)



// function unique(words) {
//     var memo = {};
//     for (let word of words) {
//         memo[word] = 1;
//     }
//     var array = [];
//     for (let mem in memo) {
//         array.push(mem);
//     }
//     return array;
// }


console.log(unique(['cat', 'dog', 'rat', 'dog', 'cat', 'bird']));