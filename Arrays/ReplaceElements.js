var replaceElements = function(arr) {
    let greatest =0;
    for(let i=0, j=0;i < arr.length ; i++) {
        console.log(i,j);
        greatest = Math.max(greatest, arr[i]);
        if(i === arr.length-1) {
            arr[j] = greatest;
            j++;
            i = j;
            greatest = 0;
        }
    }
    arr[arr.length-1] = -1;
arr