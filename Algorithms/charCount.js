/*

1 ) UNDERSTAND THE PROBLEM
======================================================================================================
Write a function which takes in a string and returns count of each char in the string
======================================================================================================

1) Can I restate the problem in my own words?
    Find how many times a character repeats in a string
2) What are the inputs that goes into the problem?
    Is there a restriction to string length, what is the maximum length then? Case sensitive? 
3) What are the output comes from the problem?
    Is it a map with character and count? 
4) Can the output determined from the inputs?
    Yes, String character diversity determines the output feature 
5) How should I label the important pieces of data that are part of the problem?
    A map 

-----------------------------------------------------------------------------------------------------------------------------
|a 
-----------------------------------------------------------------------------------------------------------------------------
|
-----------------------------------------------------------------------------------------------------------------------------    

2) CONCRETE EXAMPLES
 Write few test cases yourself 
 a. start with simple inputs 
     aaaaa
     Hello
 b. Progress to more complex inputs
     My Phone Number is 13345345453456
     Hello Hi _&*££$£ 
 c. Explore with more empty inputs
    NULL
    ""  
 d. Explore examples with negative inputs 
*/

/*function charCount(str){
    var map = new Map();
    var charArr = str.split("");
    for(let i =0; i< charArr.length; i++){
        if(map.has(charArr[i])){
            map.set(charArr[i], map.get(charArr[i])+1);
        } else {
            map.set(charArr[i], 1);
        }
    }
    return map;
}*/

/*
Psuedocode
function charCount(str){
    // create an object to reeturn
    // loop over each character of the string 
       // for each character
          // if there is a key == char (and alpha numeric) , add one to value 
          // else add a new key and set value to 1
    // return object at the end 

}

*/

/*

function charCount(str){
    var obj = {};
    for (var char of str){
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)) {
            obj[char] = obj[char]++ || 1;
        }
    }
    return obj;
}
*/



function charCount(str){
    var obj = {};
    for (var char of str){
        char = char.toLowerCase();
        var val = char.charCodeAt();
        if((val >=47 && val <=58 ) || (val >= 96 && val <= 123)) {
            obj[char] = obj[char]++ || 1;
        }
    }
    return obj;
}
console.log(charCount("My Ohonessdfsd is 2352346345643"));
//console.log(charCount(""));


"I am a christian"

