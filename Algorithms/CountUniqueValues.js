/*

1 ) UNDERSTAND THE PROBLEM
======================================================================================================
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values
in the array. There can be negative numbers in the array, but it will always be sorted.
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

function countUniqueValues_1(arr){
    var obj ={};
    for(var val of arr){
        obj[val] = (obj[val] || 0)+1;
    }

    return Object.keys(obj).length;
}


function countUniqueValues(arr){
    if(arr.length > 0){
        var p1=0, p2=0,unique =1;
        while(p2<arr.length){
            if(arr[p1]!=arr[p2]){
                unique++;
                p1=p2;
            }
            p2++;
        }
        return unique;
    } else{
        return undefined;
    }
}
countUniqueValues([1,1,2,3,3,3,4,5]);