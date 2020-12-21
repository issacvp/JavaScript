//Write a function factorial that takes a number as an argument and returns the factorial of thatn number 
// The factorial of n is the product of all positinve numbes from 1 to n 

// factorial(5) = 5*4*3*2*1
// factorial(1) = 1  <-- Base case 
// factorial(5) = 5* factorial(4) 
// factorial(n) = n* factorial(n-1)  <-- recursive case 

function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
};

/*
Complexity : 
    Time : O(n)
    Space : O(n)  <-- Stack space 
*/

console.log(factorial(1)); //1
console.log(factorial(2)); //2 
console.log(factorial(3)); //6 
console.log(factorial(4)); //24
console.log(factorial(5)); //120  