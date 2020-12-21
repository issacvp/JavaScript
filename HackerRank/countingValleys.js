function countingValleys(n,s){
    if(!s.length || s.length <2){
        return 0;
    } else {
        var charArr = s.split("");
        let step=0, before=0, valleys =0;
        for(c of charArr){
            before = step;
            if(c === 'U'){
               step ++;
            } else if (c === 'D'){
                step --;
            }
            console.log(before, step, c);
            if(before === 0 && step === -1){
                valleys++;
            }
        }
        return valleys;
    }
}

console.log(countingValleys(8, "DDUUUUDD"));