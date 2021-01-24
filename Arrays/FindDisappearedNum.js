var findDisappearedNumbers = function(nums) {
    // nums.sort((a,b)=> a-b);
    // console.log(nums);
    // var result = [];
    // let i=0,j=1;
    // while(j <= nums.length){
    //    console.log("("+nums[i]+","+j+")");
    //    if(nums[i] > j || i >= nums.length) {
    //        result.push(j);
    //        j++;
    //    } else if(nums[i] < j) {
    //        i++;
           
    //    }  else {
    //        i++;
    //        j++;
    //    }
    // }
    // i
    // j
    // return result;
    for (let i = 0; i < nums.length; i++) {
        let j = Math.abs(nums[i]) - 1;
        nums[j] = Math.abs(nums[j]) * -1;
    }
    
    let absent = [];
    
    for(let i=0; i < nums.length; i++) {
        if(nums[i] > 0) {absent.push(i + 1)};
    }
    
    return absent;
    
};



var nums = [27,40,6,21,14,36,10,19,44,10,41,26,39,20,25,19,14,7,29,27,40,38,11,44,4,6,48,39,9,13,7,45,41,23,31,8,24,1,3,5,28,11,49,29,18,4,38,32,24,15]
console.log(findDisappearedNumbers(nums));