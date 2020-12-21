/*
Merging 2 sorted arrays 
Create an empty array,take a look at smallest values left in inout arrays 
while there are still values we didnt look yet
   if the first value in first array less than first value in second array , then  push the first item in first array to result array and move to next item 
   else push push first item of second array and move to next item
*/
function merge(arr1, arr2){
    let arr = [];
    let i = 0, j = 0;
    while (i<arr1.length && j < arr2.length){
       if(arr1[i] <= arr2[j]){
           arr.push(arr1[i++]);
       } else {
           arr.push(arr2[j++]);
       }
       console.log(arr);
    }
        while(j<arr2.length){
            arr.push(arr2[j++]);
        }
        while(i<arr1.length){
            arr.push(arr1[i++]);
        }
    return arr;
}

function sort(arr){
    if(arr.length==1){
        return arr;
    } else {
        return merge(sort(arr.slice(0, Math.floor(arr.length/2))),sort(arr.slice(Math.floor(arr.length/2))));
    }
}

console.log(sort([1,4,5,3,6,7,3]));