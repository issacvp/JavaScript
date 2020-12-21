function search(str1, str2){
    var count =0;
    for(let i=0;i<str1.length;i++){
        for(let j=0;j<str2.length;j++){
            if(str1.charAt(i+j)!==str2.charAt(j)){
                console.log(i,j);
                break;
            }
            if(j===str2.length-1){
                count++;
            }
        }
    }
    return count;
}


console.log(search("prepareforbcm", "re"));