var thirdMax = function(nums) {
    var max1 = Number.NEGATIVE_INFINITY, max2= Number.NEGATIVE_INFINITY, max3 = Number.NEGATIVE_INFINITY;
    for(let val of nums) {
        max1 = Math.max(val, max1);
    }
    for(let val of nums) {
        if(val !==max1) {
            val
            max2 = Math.max(val, max2);
        }
    }
    for(let val of nums) {
        if(val!==max1 && val!== max2) {
            max3 = Math.max(val, max3);
        }
    }
    
    if(max3 > Number.NEGATIVE_INFINITY) {
        return max3;
    } else {
        return max1;
    }
};

var nums = [2,2,3,1];
var thirdMaxNum = thirdMax(nums);
thirdMaxNum