/**  Given a sorted array, remove the duplicates such that each element appears only once. */

const assert = require('assert');

function removeDuplicates(arr) {
    let j=0;
    for(let i=0;i<arr.length; i++){
        if(arr[i] > arr[j]){
            j++;
            arr[j] = arr[i];
        }
    }
    arr.length = j+1;
    return arr.length;
}
let arr = [1,1,2];
console.log(removeDuplicates(arr));
arr
arr = [0,0,1,1,1,2,2,3,3,4];
removeDuplicates(arr);
arr