function search(arr, n){
    let i = 0, j=arr.length-1, k= 0;
    while(i<=j){
        k = Math.floor((i+j)/2);
        if(arr[k] ===n){
            return k;
        } else if(arr[k] < n){
            i = k+1;
        } else {
            j=k-1;
        }
    }
    return -1;
}

console.log(search([0,1,2,3,4], 1));