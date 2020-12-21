function sort(arr){
    for(let i=1; i< arr.length; i++){
        var currVal = arr[i];
        for(var j=i-1; j>=0 && arr[j] > currVal; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currVal; 
        console.log(arr);
    }
    return arr;
}

console.log(sort([1,5,4,6,7]));

/*
start by picking the second element in array
now compare it with the item before it, and swap if necessary
continue to next element if it is in incorrect order, iterate through the sorted portion to place the element in correct position 
Repeat until array is sorted 

Effective in near sorted array snenarios.  
O(n^2)

*/