
function isPalindrome(str){
  if(str.length===1){
      return true;
  }
  if(str.length===2){
      if(str.charAt(0)===str.charAt(1)){
          return true;
      } else{
          return false;
      }
  } else{
      if(str.charAt(0) === str.charAt(str.length-1)){
          return true;
      } else{
          return false;
      }
  }
  
  return isPalindrome(str.substr(1,str.length-2));
}


console.log(isPalindrome('malayalam'));