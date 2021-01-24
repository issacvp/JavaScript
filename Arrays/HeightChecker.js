var heightChecker = function(heights) {

    var sortedHeights = [...heights];
    sortedHeights.sort(function(a, b){return a-b});
    let count = 0;
    for(let i=0;i<heights.length;i++){
        if(sortedHeights[i] !== heights[i]){
            count++;
        }
    }
    console.log(sortedHeights);
    return count;
};

var heights = [10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7];
console.log(heightChecker(heights));
heights;