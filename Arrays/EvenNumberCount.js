var findNumbers = function(nums) {
    var evenCount = 0;
    for (num of nums) {
        num
        if(getLength(num)%2===0){
            evenCount++;
        }
    }
    return evenCount;
};


var getLength = function(num) {
    var count = 0;
    while(num > 0) {
        num = Math.floor(num/10);
        count++;
    }
    return count;
};

var count = findNumbers([78]);
count