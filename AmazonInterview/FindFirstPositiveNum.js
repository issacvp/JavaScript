function solution(S) {
    let maxLength = 0;
    let memo = {};
    //This will help me to traverse the array 
    let charArr = S.split('');
    //This is a main for loop run through the array;
    for (let i = 0; i < charArr.length; i++) {
        //This nested for loop check if the subset of char contains a substring with even number of chars 
        for (let j = i; j < charArr.length; j++) {
            //If memo already has the char, increase the value, else add new entry
            if (memo[charArr[j]]) {
                memo[charArr[j]] += 1;
            } else {
                memo[charArr[j]] = 1;
            }
            //check if the substring (i to j) is an even char substring
            if (_isEven(memo)) {
                maxLength = Math.max(maxLength, (j - i)+1);
            }
        }
        //Clear memo
        memo = {};
    }
    return maxLength;
}

function _isEven(memo={}) {
    for(let i in memo) {
        if(memo[i]%2 !== 0) {
            return false;
        }
            
    }
    return true;
}

//console.log(solution('bdaaadadb'));

function getSliceCount(A) {
    //Input validation, checking if array has element.
    if(A.length === 0) {
        return 0;
    } 
    if(A.length === 1){
        return 1;
    }
    //So we start the right position
    let difference = A[0], sliceCount=0, i=1, sliceStart=0;
    while(i<A.length) {
        let newDifference = Math.abs(A[i]-A[i-1]);
           difference
        newDifference
        if(newDifference > 2) {
            sliceCount++;
        } else {
            difference = newDifference;
        }
        difference
        i++;
    }
    if(i-sliceStart > 1) {
        sliceCount++;
    }
    return sliceCount;
}

console.log(getSliceCount([2,4,1,6,5,9,7]));