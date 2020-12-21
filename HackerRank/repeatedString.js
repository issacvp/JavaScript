/*function repeatedString(s, n) {
    if (!s.length  || s.length < 1 ) {
        return 0;
    } else {
        let count = 0,p=0;
        var charArr = s.split("");
        let i = 1;
        while( i<= n){
            if (charArr[p] === 'a') {
                count++;
            }
            console.log(charArr[p],i,p,count);
            p++;
            i++;
            if (p == (charArr.length)) {
                p = 0;
            }
        }
        return count;
    }
}*/

function repeatedString(s,n){
    if(!s.length || s.length <1){
        return 0;
    } else {
        let numOfStrings = Math.floor(n/s.length);
        let restLength = n%s.length;
        let charArr = s.split("");
        let aCount = 0;
        for(c of charArr){
            if(c==='a'){
                aCount++;
            }
        }
        aCount = aCount*numOfStrings;
        for(let i=0; i<restLength; i++){
            if(charArr[i]==='a'){
                aCount++;
            }
        }
        return aCount;
    }
}
console.log(repeatedString("aba", 10));