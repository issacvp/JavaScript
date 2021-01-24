var checkIfExist = function(arr) {
    var memo = {};
    for(let i of arr) {
        if(i in memo) {
            return true;
        }
        memo[i/2] = true;
        memo[i*2] = true;   
    }
    return false;
};

var arr = [];
var result = checkIfExist(arr);
result;