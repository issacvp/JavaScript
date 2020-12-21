function sort(arr){
    for(let i=0; i<arr.length;i++){
        let min = i;
        for(let j=i;j<arr.length;j++){
            if(arr[j]< arr[min]){
                min = j;
            }
        }
        if(arr[i] !== arr[min]){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

console.log(sort([1,4,3,6,5,7]));