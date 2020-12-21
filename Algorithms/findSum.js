/*function findSum(n){
    let total=0;
    for(let i=1;i<=n;i++){
        total+=i;
    }
    return total;
}*/

function findSum(n){
    return n*(n+1)/2;
}

var start = performance.now();
console.log(findSum(100000));
var end = performance.now();
console.log((end-start));
