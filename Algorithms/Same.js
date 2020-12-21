/*

1 ) UNDERSTAND THE PROBLEM
======================================================================================================
Write a fucntion called SAME, which accepts two arrays. The function should return true if every value
in the array has its correspnding value squared in the second array. The frequency of values must be the 
same 
======================================================================================================

1) Can I restate the problem in my own words?

TRUE : For every value in the first should have a correspnding square in second array
Regardless of the duplicates.

2) What are the inputs that goes into the problem?
Two non empty integer arrays.

3) What are the output comes from the problem?
TRUE or FALSE

4) Can the output determined from the inputs?
YES

5) How should I label the important pieces of data that are part of the problem?


2) CONCRETE EXAMPLES
 Write few test cases yourself 
 a. start with simple inputs 
  same([1,2,3],[1,4,9]) => TRUE

 b. Progress to more complex inputs 
  same([1,4,6],[,36,1,16]) => TRUE
  same([1,2,3],[1,9]) => FALSE
  same([1,2,1],[1,4,4]) => FALSE
 
 c. Explore with more empty inputs 
 same([],[]) => TRUE
 d. Explore examples with negative inputs 
 same("","") => throw an error    (if possible to include in time )

3) BREAK IT DOWN
 Write a pseudo code , no need to be syntactically corrent!
 Explicity write down the steps you take 
*/
function same_simple(arr1, arr2){
    if(arr1.length != arr2.length){
        return false;
    } else{
        for(var val of arr1){
            let index = arr2.indexOf(val ** 2);
            if(index === -1){
                return false;
            }
            arr2.splice(index, 1);
        }
        return true;
    }
}
function same(arr1,arr2){
    //input validation 
    //IF array lengths are not same => FALSE
    if(arr1.length != arr2.length){
        return false;
    //ELSE IF array legths are zero => TRUE 
    } else if(arr1.length ==0) { 
        return true;
    //ELSE 
    } else {
        //loop every element on the array and check the second array for the square
        var obj1 = {};
        var obj2 = {};
        for(let i = 0; i <arr1.length;i++){
            obj1[arr1[i]] = (obj1[arr1[i]] || 0)+1;
            obj2[arr2[i]] = (obj2[arr2[i]] || 0)+1;
        }
        if(obj1.length == obj2.length){
             for(var key in obj1){
                 if(!obj2[key*key] && obj1[key] != obj2[key*key]){
                     return false;
                 }
             }
             return true;
        } else {
            return false;
        }
             
        // END of loop and still then return true;
    
    }
}

//console.log(same([1,4,6],[1,36,16])); 
console.log(same([1,4,6,4],[16,1,36,16])); 

/*

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