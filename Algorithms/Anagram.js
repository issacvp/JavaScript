/*

1 ) UNDERSTAND THE PROBLEM
======================================================================================================
Given two strings, write a function to determine if the second string is an anagram of the first.
An Anagram is a word, phrase or name formed by rearranging the letters of another, 
such as cinema to iceman
======================================================================================================

1) Can I restate the problem in my own words?
Second string should be same length and it should have all the characters 

2) What are the inputs that goes into the problem?
Are the string contain word or sentence.
Does it have only lowercase, uppercase or mixed?
Does it have alphanumric?

Two non zero length strings 

3) What are the output comes from the problem?
TRUE: If strings contain same characters with repetions if any
FALSE: If string lengths are not matching or strings does not contain equal number of chars 

4) Can the output determined from the inputs?
YES

5) How should I label the important pieces of data that are part of the problem?
require two objects.

2) CONCRETE EXAMPLES
 Write few test cases yourself 
 a. start with simple inputs
    validAnagram('aaz','zza'); false
    validAnagram('anagram','nagaram'); true
     
 b. Progress to more complex inputs 
    validAnagram('rat','car'); false
    validAnagram('awesome','awesom'); false
    validAnagram('qwerty','qeywrt'); true
    
 c. Explore with more empty inputs 
    validAnagram('',''); true
    
 d. Explore examples with negative inputs 


3) BREAK IT DOWN
 Write a pseudo code , no need to be syntactically corrent!
 Explicity write down the steps you take  */
function validAnagram(str1, str2){
    if(str1.length != str2.length){
        return false;
    } else {
        var obj1 = {};
        var obj2 = {};
        for(var c of str1){
            obj1[c] = (obj1[c] || 0) +1;
        }
        for(var c of str2){
           obj2[c] = (obj2[c] || 0) +1;
        }
        if(obj1.length != obj2.length){
            return false;
        } else{
            for(var key in obj1){
                if(obj1[key] !=obj2[key]){
                    return false;
                }
            }
            return true;
        }
    }
}

validAnagram('cinema','iceman');
/*
4) SOLVE & SIMPLIFY

5) LOOK BACK & REFACTOR 
  a. can you check the result?
  improve code with the counter just one;
  
  b. can you derive the result differently?
  c. can you understand it at a glance?
  d. can you use the result or method for some other problem?
  e. can you improve the performance of your solution 
  f. Can you think other ways to refactor
  g. How have other people solved the same problem  
*/