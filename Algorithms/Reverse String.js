function reverse(str){
    var arr = str.split("");
    for(var i=0;i<arr.length/2;i++){
        var temp=arr[i];
        arr[i]=arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
    return arr.join("");
}

function reverseBuiltIn(str){
    return str.split("").reverse().join("");
}

function reverseNew(str){
    var newStr="";
    for(var i=str.length-1;i>=0;i--){
        newStr +=str.charAt(i);
    }
    return newStr;
}

function reverseRecursion(str){
    if(str === "")
        return "";
    else
        return reverseRecursion(str.substr(1))+str.charAt(0);

    /*
    ReWrite if condition with ternary operator
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
    */
}
console.log(reverse("Hai"));
console.log(reverseBuiltIn("Hai"));
console.log(reverseNew("Hai"));
console.log(reverseRecursion("Hai"))
