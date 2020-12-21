/*
1) Start i at the end of the array towards beginning
    2) Start an inner loop j from 0 to (i-1)
        3) compare arr[j] and and arr[j+1]
        4) swap if required;

// normal implementation 

function sort(arr){
    for(let i=arr.length-1; i>=0; i--){
        for(let j=0;j<=i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

*/
//With  NoSwap.  This makes nearly sorted array sorting faster
function sort(arr){
    var noSwap;
    for(let i=arr.length-1; i>=0; i--){
        noSwap = true;
        for(let j=0;j<=i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwap = false;
            }
        }
        if(noSwap){
                break;
        }
    }
    return arr;
}

console.log(sort([1,4,3,6,5,7]));