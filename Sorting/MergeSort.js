/*
Merging 2 sorted arrays 
Create an empty array,take a look at smallest values left in inout arrays 
while there are still values we didnt look yet
   if the first value in first array less than first value in second array , then  push the first item in first array to result array and move to next item 
   else push push first item of second array and move to next item
*/
// function merge(arr1, arr2){
//     let arr = [];
//     let i = 0, j = 0;
//     while (i<arr1.length && j < arr2.length){
//        if(arr1[i] <= arr2[j]){
//            arr.push(arr1[i++]);
//        } else {
//            arr.push(arr2[j++]);
//        }
//        console.log(arr);
//     }
//         while(j<arr2.length){
//             arr.push(arr2[j++]);
//         }
//         while(i<arr1.length){
//             arr.push(arr1[i++]);
//         }
//     return arr;
// }

// function sort(arr){
//     if(arr.length==1){
//         return arr;
//     } else {
//         return merge(sort(arr.slice(0, Math.floor(arr.length/2))),sort(arr.slice(Math.floor(arr.length/2))));
//     }
// }

// console.log(sort([1,4,5,3,6,7,3]));

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    let merged = [];
    let first = 0;
    let second = 0;
    while (first < left.length && second < right.length) {
        if (left[first] <= right[second]) {
            merged.push(left[first]);
            first++;
        } else {
            merged.push(right[second]);
            second++;
        }
    }
    while (first < left.length) {
        merged.push(left[first]);
        first++;
    }
    while (second < right.length){
        merged.push(right[second]);
        second++;
    }
    return merged;
}

console.log(merge([1,4,6],[2,3,5,6,7]));
const answer = mergeSort(numbers);
console.log(answer);