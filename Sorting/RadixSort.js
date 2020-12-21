/*function getDigit(num,pos){
    for(let i=0; i<pos; i++){
        num = Math.floor(num/10);
    }
    return num%10;
}*/

/*function digitCount(num){
    let i = 0;
    while(num > 0){
        num = Math.floor(num/10);
        i++;
    }
    return i;
}*/
function getDigit(n,i){
    return Math.floor((Math.abs(n)/Math.pow(10,i))%10);
}

function digitCount(num){
    if(num===0) return 1;
    else return Math.floor(Math.log10(Math.abs(num)))+1;
}

function mostDigits(arr){
    let most = digitCount(arr[0]);
    for(let i=0; i<arr.length;i++){
        most = Math.max(most, digitCount(arr[i]));
    }
    return most;
}
/*
1. Define a function that accepts list of numbers 
2. Figure out how many digits the largest number has 
3. Loops from k=0 to the number of digits of largest number 
4. For each iteration 
    Create buckets for each digit 
    place each number in corresponding buckets in each buckts 
5, Replace existing array with contents of the bucket, repeat 4  
6 Return final list
*/

function sort(arr){
    console.log(mostDigits(arr));
    for(k=0; k<mostDigits(arr);k++){
        //var buckets = [[],[],[],[],[],[],[],[],[],[]];
        var buckets = Array.from({length:10}, ()=>[]);
        for(let i=0; i<arr.length;i++){
            buckets[getDigit(arr[i],k)].push(arr[i]);
        }
        arr = [].concat(...buckets);
        /*arr = [];
        for(let i=0; i<buckets.length;i++){
            for(let j=0;j<buckets[i].length;j++){
                arr.push(buckets[i][j]);
            }
        }*/
    }
    return arr;
}

console.log(sort([1,34,554,564564564,67]));