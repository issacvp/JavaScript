function double(n){
    return n*n;
}
console.log(double(10));

var double = function(n){
    return n*n*n;
}
console.log(double(10));


function doubling(values) {
    var result = [];
    for(let i of values){
       result.push(i*i);
    }
    return result;
}

console.log(doubling([1,2,3,4,5]));