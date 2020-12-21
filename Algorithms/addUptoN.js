function addUpto(n){
    var sum = 0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}

function addUptoN(n){
    return n*(n+1)/2;
}

console.log(addUpto(100));
console.log(addUptoN(100));