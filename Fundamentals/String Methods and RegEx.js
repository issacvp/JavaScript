/*
https://coderbyte.com/tutorial/javascript-string-methods-regular-expressions
*/

var str="Hello"
console.log(str.charAt(0));

//charCodeAt() returns the unicode of the character

console.log(str.charCodeAt(0));
//String.fromCharCode() converts a unicode to char.
console.log(String.fromCharCode(str.charCodeAt(0)+4));

//split function splits a string
str = "Hello from Lucan";
var charArr = str.split("");
var strArr = str.split(" ");
console.log(charArr);
console.log(strArr);

//replace()
console.log(str.replace("from","to"));

//substr()
console.log(str.substr(6,6));

//--REG EXP

str = "An apple was eaten";
//replace all 'a' with '4'
console.log(str.replace(/a/gi, "4"));

//Mask all numbers with 'x'
str = "My phone number is 551-555-5555";
console.log(str.replace(/[0-9]/gi, "x"));

/* 
  find the position in the string where the character A is exactly 2 spaces away from B
*/
str = "ABxxAxxB"
var pos = str.search(/A..B/gi); // 4
console.log(pos);

function capitaize(str){
  var words = str.split(" ");
  for(let i = 0 ; i < words.length;i++){
    words[i] = words[i].substr(0,1).toUpperCase()+words[i].substr(1);
  }
  return words.join(" ");
}

console.log(capitaize("i love you"));