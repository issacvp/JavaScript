/*

1 ) UNDERSTAND THE PROBLEM
======================================================================================================
Write a function called MaxSubArraySum which accepts an array of integers and a number called n
The function should calculate the maximum sum of n consecutive elements in the array 

maxSubArraySum([1,2,5,2,8,1,5],2) 10
maxSubArraySum([1,2,5,2,8,1,5],4) 17
maxSubArraySum([4,2,1,6],1) //6
maxSubArraySum([],4) //null
======================================================================================================

1) Can I restate the problem in my own words?
There should exist a subarray of length n which have the maximum value than all other subarray of length n in the main array

2) What are the inputs that goes into the problem?
One array and length

3) What are the output comes from the problem?
If array length less than the subarray length then return null <-- bad inputs
Else go through the length of the array and slide the subarray and find the sum of it;

4) Can the output determined from the inputs?
Yes

5) How should I label the important pieces of data that are part of the problem?
Useing SLIDING WINDOW approach

2) CONCRETE EXAMPLES
 Write few test cases yourself 
 a. start with simple inputs 
 b. Progress to more complex inputs 
 c. Explore with more empty inputs 
 d. Explore examples with negative inputs 


3) BREAK IT DOWN
 Write a pseudo code , no need to be syntactically corrent!
 Explicity write down the steps you take 

set p1 at 0, p2 and n-1
set largestSum =0
outer loop until p2 == array.length
 inner loop k=i until k=j 
  find total of the sub array
 compare sum to largestSum

return largestSum


function maxSubArraySum(arr, n){
    if(arr.length < n){
        return null;
    } else {
        var largestSum = -Infinity;
        for(var i=0, j=n-1;j<arr.length; i++,j++){
            var sum=0;
            for(let k=i; k<=j;k++){
               sum+=arr[k];
            }
            if(sum > largestSum){
                largestSum = sum;
            }
        }
        return largestSum;
    }
}

O(n*m)  where n is the length of array and m is the length of sub array
  
4) SOLVE & SIMPLIFY

5) LOOK BACK & REFACTOR 
  a. can you check the result?
  b. can you derive the result differently?
  c. can you understand it at a glance?
  d. can you use the result or method for some other problem?
  e. can you improve the performance of your solution 
  f. Can you think other ways to refactor
  g. How have other people solved the same problem  
*/

function maxSubArraySum(arr, n){
    let max =0;
    let temp = 0;
    for(let i=0; i<n; i++){
        max +=arr[i];
    }
    temp = max;
    for(let i=n; i<arr.length;i++){
        temp = temp - arr[i-n] +arr[i];
        max = Math.max(max,temp); 
    }
    return max;
}

//O(n)  Optimized by avoiding inner loop of m ,  The sliding window substracts [i-n] item and add [i] 

//maxSubArraySum([1,2,5,2,8,1,5],2); //10
maxSubArraySum([1,2,5,2,8,1,5],4) //17
//maxSubArraySum([4,2,1,6],1) //6
//maxSubArraySum([],4) //null