/*

1 ) UNDERSTAND THE PROBLEM
======================================================================================================
Given a string, find the length of the longest substring without repeating characters 
======================================================================================================

1) Can I restate the problem in my own words?
In a string , find the length of longest substring which does not have a character repeat.

2) What are the inputs that goes into the problem?
One string

3) What are the output comes from the problem?
1 if all characters are same
legnth of longest Substring else 
 
4) Can the output determined from the inputs?
Yes

5) How should I label the important pieces of data that are part of the problem?


2) CONCRETE EXAMPLES
 Write few test cases yourself 
 "abcabcbb" --> 3
 "bbbbb" --> 1
 "pwwkew" --> 3

 a. start with simple inputs 
 "aab" -->2 
 
 b. Progress to more complex inputs 
 "dvdf" -->3

 c. Explore with more empty inputs 
 d. Explore examples with negative inputs 


3) BREAK IT DOWN
 Write a pseudo code , no need to be syntactically corrent!
 Explicity write down the steps you take 


4) SOLVE & SIMPLIFY

function lengthOfLongestSubString(s){
  var arr = s.split(""); 
  if(arr.length <1){
      return 0
  } else if(arr.length == 1){
    return 1;
  } else if (arr.length >1){
     var max = 0;
     var i=0, j=1;
     var obj = {};
     obj[arr[i]]=0;
     while(j<arr.length){
         if(obj[arr[j]]){
           i=obj[arr[j]]+1;
           i = Math.max(i, map[arr[i]]+1);
         } 
         obj[arr[j]] = j++;
         max = Math.max()
     }
     max = Math.max(max, Object.keys(obj).length)
     return max; 
  }
}

5) LOOK BACK & REFACTOR 
  a. can you check the result?
  b. can you derive the result differently? dmap[arr[i]]+1
  c. can you understand it at a glance?
  d. can you use the result or method for some other problem?
  e. can you improve the performance of your solution 
  f. Can you think other ways to refactor
  g. How have other people solved the same problem  
*/

const assert = require('assert').strict;

function findLongestSubstring(s){
  var arr = s.split("");
  if(arr.length ==0){
    return 0;
  } 
  var map = {};
  var max = 0;
  for(let i=0,j=0; i<arr.length ; i++){
    if(arr[i] in map){
      j = Math.max(j, map[arr[i]]+1); 
    }
    map[arr[i]] = i;
    max = Math.max(max, i-j+1);
  }
  return max;
}
assert.strictEqual(findLongestSubstring('thisishowwedoit'),6);
//console.log(f);