/*const fib = (n) => {
    if(n<2) return 1;
    return fib(n-1) + fib(n-2);
} */

//memoization
// js object, keys will be the argument to function m value will be the return value
/*const fib = (n, memo = {}) => {
    if(n in memo) 
        return memo[n];
    if( n<=2 ) 
        return 1;
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
} */

/* The complexity is O(2^n) */


const fib = (n) => {
    const table = Array(n+1).fill(0);
    table[1] = 1;
    for(let i=0;i<=n;i++){
        table[i+1] += table[i];
        table[i+2] += table[i];
    }
    return table[n];
}
console.log(fib(6));
console.log(fib(7));
console.log(fib(50));