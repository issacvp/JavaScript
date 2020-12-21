function someRecursive(arr,callback){
    if(arr.length ===0){
        return false;
    }
    if(callback(arr[0])){
        return true;
    } else {
        return someRecursive(arr.slice(0),callback);
    }
    
}

function isOdd(n){
    if(n%2===1){
        return true;
    } else{
        return false;
    }
}

console.log(someRecursive([2,2,3,4],isOdd));