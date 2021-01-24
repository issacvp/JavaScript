var validMountainArray = function(arr) {
    arr
    if(arr.length<3){
        return false;
    }
    let mid = Math.floor((arr.length-1)/2);
    let left = mid-1;
    let right =  mid+1;
    console.log("("+arr[left]+","+arr[mid]+","+arr[right]+")");
    if(arr[left] < arr[mid] && arr[mid]> arr[right]){
        return true;
    } else if (arr[left] > arr[mid] && arr[mid] > arr[right]) {
        return validMountainArray(arr.slice(0,mid));
    } else if (arr[left] < arr[mid] && arr[mid] < arr[right]) {
        return validMountainArray(arr.slice(mid,arr.length-1));
    } else {
        return false;
    }
};

var arr = [0,2,3,4,5,6,7,8,9];
var peakPresent = validMountainArray(arr);
peakPresent