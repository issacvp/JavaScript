/*

1 ) UNDERSTAND THE PROBLEM
======================================================================================================
Write a function called minSubArrayLen which accepts tow parameters - an array of positive integers and
a positive integer.
This function should return the minimal length of a contiguous subarray of which the sum is greater than 
or equal to the integer passed to the function. If there isn't one return 0 instead.

======================================================================================================

1) Can I restate the problem in my own words?
2) What are the inputs that goes into the problem?
3) What are the output comes from the problem?
4) Can the output determined from the inputs?
5) How should I label the important pieces of data that are part of the problem?


2) CONCRETE EXAMPLES
 Write few test cases yourself 
minSubArrayLen([2,3,1,2,4,3],7) //2 --> [4,3] is the array
minSubArrayLen([2,1,6,5,4],9) //2 --? [5,9] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], //52) --> 1 because [62] is the greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) //3
minSubArrayLen([1,4,16,22,5,7,8,9,10], 55) //5
minSubArrayLen([4,3,3,8,1,2,3],11) //2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) //0

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