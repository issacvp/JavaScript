/*

1 ) UNDERSTAND THE PROBLEM
======================================================================================================
Write a function called sumZero which accepts a sorted array of integers. The function should find the 
first pair where the sum is 0. Return an array that includes both vlaues that sum to zero or undefined
if a pair does not exit
======================================================================================================

1) Can I restate the problem in my own words?
2) What are the inputs that goes into the problem?
3) What are the output comes from the problem?
4) Can the output determined from the inputs?
5) How should I label the important pieces of data that are part of the problem?


2) CONCRETE EXAMPLES
 Write few test cases yourself 
 a. start with simple inputs 
 b. Progress to more complex inputs 
 c. Explore with more empty inputs 
 d. Explore examples with negative inputs 


3) BREAK IT DOWN
 Write a pseudo code , no need to be syntactically corrent!
 Explicity write down the steps you take 


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

function sumZero(arr){
    var left =0;
    var right = arr.length -1;
    while(left < right){
        if(arr[left]+arr[right]==0){
            return [arr[left],arr[right]]
        } else if(arr[left]+arr[right] < 0){
            left++;
        } else {
            right--;
        }
    }
}

//sumZero([-3,-2,-1,0,1,2,3]);
//sumZero([-2,0,1,3]);
//sumZero([1,2,3])