/* function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target === array[mid]) {
            return mid;
        } else if (target < array[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }

    }
    return false;
} */


/**?
 * Time Complexity : 
 * O(log(n))
 * Space Complexity : 
 * O(1)
 */

/*function binarySearch(array, target) {
    if (array.length === 0) return false;
    let mid = Math.floor((array.length - 1)/2);
    console.log(array, mid);
    if (array[mid] === target) return true;
    else if (array[mid] < target)
        return binarySearch(array.slice(mid+1), target);
    else
        return binarySearch(array.slice(0, mid-1),target);
}*/

function binarySearch(array, target, left=0, right = array.length ) {
    if(left > right) return false;
    let mid = Math.floor((left + right) / 2);
    if (target === array[mid]) {
        return mid;
    } else if (target < array[mid]) {
        return binarySearch(array, target, left, mid-1);
    } else {
        return binarySearch(array, target, mid+1, right);
    } 
}

// Complexity : O(logn), space : O(logn)
console.log(binarySearch([2, 7, 8, 9, 10, 13, 17, 19, 21], 7));
console.log(binarySearch([2, 7, 8, 9, 10, 13, 17, 19, 21], 15));