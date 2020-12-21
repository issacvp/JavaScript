var findMedianSortedArrays = function(nums1, nums2) {
    var isEvenLength1 = nums1.length%2;
    console.log(isEvenLength1);
    var isEvenLength2 = nums2.length%2;
    console.log(isEvenLength2);
    var median1 =0, median2 = 0, center =0;
    if(nums1.length >1){
        center = Math.floor(nums1.length/2);
    } else {
        center = 0;
    }
    if(isEvenLength1 ===0){
        median1 = (nums1[center-1]+nums1[center])/2;
    } else {
        median1 = nums1[center];
    }
    
    if(nums2.length >1){
        center = Math.floor(nums2.length/2);
    } else {
        center = 0;
    }
    if(isEvenLength2===0){
        median2 = (nums2[center-1]+nums2[center])/2;
    } else {
        median2 = nums2[center];
    }
    return (median1+median2)/2;
};

findMedianSortedArrays([1,2],[1]);