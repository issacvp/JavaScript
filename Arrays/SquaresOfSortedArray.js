var sortedSquares = function(nums) {
    var i=0,j=-1;
    var sortedArray = [];
    while(i<nums.length && nums[i]<=0) {
        j=i;
        i++;
    }
    while(i<nums.length && j > -1) {
        console.log(i);
        console.log(j);
        if(nums[i]*nums[i] < nums[j]*nums[j]){
            sortedArray.push(nums[i]*nums[i]);
            i++;
        } else {
            sortedArray.push(nums[j]*nums[j]);
            j--;
        }
    }
    while(i<nums.length) {
        sortedArray.push(nums[i]*nums[i]);
        i++;
    }
    while(j>-1) {
        sortedArray.push(nums[j]*nums[j]);
        j--;
    }
    return sortedArray;
    
};

var nums = [1];
nums = sortedSquares(nums);
console.log(nums);