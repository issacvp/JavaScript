/*

1 ) UNDERSTAND THE PROBLEM
======================================================================================================
Write a fuction called averagePair. Given a sorted array of integers and a target average. Determine 
if there is a pair of values in the array where the average of the pair equals the targer average. 
There may be more than one pair that mathcers the average target.

Bonus constraints : 
Time : O(N)
Space :O(1)

======================================================================================================

1) Can I restate the problem in my own words?
2) What are the inputs that goes into the problem?
3) What are the output comes from the problem?
4) Can the output determined from the inputs?
5) How should I label the important pieces of data that are part of the problem?


2) CONCRETE EXAMPLES
 Write few test cases yourself 
 a. start with simple inputs 
     averagePair([1,2,3],2.5) //true
     averagePair([1,3,3,5,6,7,10,12,19],8) //true
     averagePair([],4) //false
 b. Progress to more complex inputs 
 c. Explore with more empty inputs 
 d. Explore examples with negative inputs 


3) BREAK IT DOWN
 Write a pseudo code , no need to be syntactically corrent!
 Explicity write down the steps you take 

start with two pointers , i at the starting and j at the end 
go through a loop where i<j
  check if (arr[i]+arr[j])/2 == num  ==> return true 
        else if (avg < num ) ==> increase i
        else ==> decrease j;

   return false;

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


function averagePair(array, avg){
  if(array.length==0){
    return false;
  } else if (array.length ===1 && array[0] != avg){
    return false;
  } else {
    let i=0, j=array.length-1;
    while(i<j){
      let num = (array[i]+array[j])/2;
      if(num === avg){
        return true;
      } else if (num <avg){
        i++;
      } else {
        j--;
      }
    }
    return false;
  }
}

//averagePair([],4); //false
//averagePair([-1,0,3,4,5,6],4.1); //false
//averagePair([1,3,3,5,6,7,10,12,19],8); //true
averagePair([1,2,3],2.5);