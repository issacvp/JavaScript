/*
Write a function sum that takes an array of numbers as an input . The function should return the total sum of all elements 

The function must be recursive 
*/

/* function sum(array) {
    if (array.length === 0) return 0;
    return sum(array.slice(1)) + array[0];
} */


function sum(array) {
    return _sum(array,0);
}

function _sum(array, i) {
    if(i=== array.length) return 0;
    return _sum(array,i+1)+array[i];
}
/*
Complexity : 
    Time : 
        slice : --> O(n) 
        recursion --> O(n)
            O(n^2)
    Space : 
        stack  --> n 
*/



console.log(sum([1, 5, 7, -2])) //11
console.log(sum([])); //0
console.log(sum([1])); //1
console.log(sum([1, 5])); //6
console.log(sum([1, 5, 7])); //13