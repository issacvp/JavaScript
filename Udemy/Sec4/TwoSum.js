/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/

/**
 * Key points 
 * ----------------
 * 1. Inputs are two arrays and not sorted  
 * 2.
 * 
 * Bruteforce method 
 * ------------------
 * Nested loop to check each numbers and the 
 */

function hasTwoSum(array, sum){
    var set = new Set();
    for(let val of array){
        if(set.has(val)){
            return true;
        }
        set.add(sum-val);
    }
    return false;
}

const array = [1,3,5,8,9];
console.log(hasTwoSum(array, 10));
const array2 = [11,13,-5,8,9];
console.log(hasTwoSum(array2, 8));