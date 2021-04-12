//console.log(solution('bdaaadadb'));

function getSliceCount(A) {
    //Input validation, checking if array has element.
    if(A.length === 0) {
        return 0;
    } 
    if(A.length === 1){
        return 1;
    }
    //So we start the right position
    let difference = A[0], sliceCount=0, i=1, sliceStart=0;
    while(i<A.length) {
        let newDifference = Math.abs(A[i]-A[i-1]);
           difference
        newDifference
        if(newDifference > 2) {
            sliceCount++;
        } else {
            difference = newDifference;
        }
        difference
        i++;
    }
    if(i-sliceStart > 1) {
        sliceCount++;
    }
    return sliceCount;
}

console.log(getSliceCount([2,4,1,6,5,9,7]));