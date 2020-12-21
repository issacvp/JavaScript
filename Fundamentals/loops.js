/*
for (initial; condition; steps){

}
*/




var arr=[];
//for loop
for(let i=0;i<10;i++){
    arr.push(i);
}

console.log(arr);
i=0;

//while loopp
while(i<10){
    i++;
    console.log(arr[i]);
    if(i==5){
        continue;
    }
    if(i==7)
    break;
}

