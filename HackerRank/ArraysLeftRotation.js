// Complete the rotLeft function below.
function rotLeft(a, d) {
    const length = a.length;
    const newArr = new Array(length);
    for(let i=0;i<a.length;i++){
        console.log((d+i)%length)
        newArr[i] = a[(d+i)%length];
    }
    return newArr;
}

const newArr = rotLeft([1,2,3,4,5],4);
newArr