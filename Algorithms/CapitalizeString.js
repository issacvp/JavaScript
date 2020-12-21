var str = "Hello World";
console.log(str.length);
var arr = str.split('');
console.log(arr);

for(let i=0;i<arr.length;i++){
    if(arr[i]===arr[i].toUpperCase()){
        arr[i] = arr[i].toLowerCase();
    }
}
console.log(arr);