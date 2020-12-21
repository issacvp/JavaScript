/*

1 ) UNDERSTAND THE PROBLEM
======================================================================================================
Write a function called isSubSequence which takes in the tow strings and checks whether the characters
in the first string from a subsequence of the characters in the second string. In other words, the fuction
should check whether the characters in the first string appear somewhere in the second string, without
their order changing.

======================================================================================================

1) Can I restate the problem in my own words?
2) What are the inputs that goes into the problem?
3) What are the output comes from the problem?
4) Can the output determined from the inputs?
5) How should I label the important pieces of data that are part of the problem?


2) CONCRETE EXAMPLES
 Write few test cases yourself 
 isSubSequence("hello", "hello World"); //true
 isSubSequence("sing", "sting"); //true
 isSubSequence("abc", "abracadabra"); //true
 isSubSequence("abc","acb"); // false (order matters);

 a. start with simple inputs 
 b. Progress to more complex inputs 
 c. Explore with more empty inputs 
 d. Explore examples with negative inputs 


3) BREAK IT DOWN
 Write a pseudo code , no need to be syntactically corrent!
 Explicity write down the steps you take 


4) SOLVE & SIMPLIFY

maintain a pointer k to track characters in string 1
maintain 2 pointers on second string 
if array2[j] == array1[k] 
   k++
   i=j

if k reaches array1.length then return true;

if j reaches end of array2 then exit and return false;
 
5) LOOK BACK & REFACTOR 
  a. can you check the result?
  b. can you derive the result differently?
  c. can you understand it at a glance?
  d. can you use the result or method for some other problem?
  e. can you improve the performance of your solution 
  f. Can you think other ways to refactor
  g. How have other people solved the same problem  
*/

function isSubSequence(str1, str2){
    var array1 = str1.split("");
    var array2 = str2.split("");

    if(array1.length <= array2.length){
        let i=0,j=0;
        while(j<array2.length){
            console.log("("+array1[i]+","+array2[j]+")");
            if(array1[i]===array2[j]){
                i++;
            }
            if(i==array1.length){
                return true;
            }
            j++;
        }
        return false;
    } else {
        return false;
    }
}


 //isSubSequence("hello", "hello World"); //true
 //isSubSequence("sing", "sting"); //true
 //isSubSequence("abc", "abracadabra"); //true
 //isSubSequence("abc","acb"); // false (order matters);
 isSubSequence("abc", "ab"); //seach string longer than the second string 