/*
Pivot Helper
In orer to help mergeSort , it is useful to make a fucntion responsible for arranging elements both side of the pivot 
Given an array, this function designate a pivot element 
It should then rearrange the array that all elements less than the pivot on the left and greater than the element on the right side
order of the elements on both sides doesnt matter 
helper should dod this in place
                       --------

when complete, helper should return the index of the pivot 

Picking a pivot
----------------
Ideally pivot chosen at the median of input array 

*/

function pivot(arr, start=0, end=arr.length-1){
    let p=arr[start];
    let s = start;
    for(let i=start+1;i<=end;i++){
        console.log(arr,s,i);
        if(arr[i]<p){
           s++;
           swap(arr, s, i);
        }
    }
    swap(arr, start, s);
    console.log(arr);
    return s;
}

function swap(arr, i, p){
    let temp = arr[i];
    arr[i] = arr[p];
    arr[p] = temp;
    return;
}

console.log(pivot([4,1,2,5,3,6,7]));