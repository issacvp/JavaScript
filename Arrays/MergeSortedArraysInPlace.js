var merge = function(nums1, m, nums2, n) {
    var i=0, j=0;
    const length = num1.length;
    while(i<length){
        console.log("("+i+","+j+")");
        if(nums2[j] < nums1[i] || i>=m+j){
            nums1.splice(i,0,nums2[j]);
            j++;
        }
        i++;
    }
    num1.length = length;
};

var num1 = [1,2,3,0,0,0];
var num2 = [2,5,6];
merge(num1,3,num2,3);
num1
