function hourglassSum(arr){
 if(!arr.length || arr.length !==6){
     return 0;
 } else {
     var large=-Infinity;
     for(let i=0;i<4;i++){
         for(let j=0; j<4;j++){
            let val = arr[i][j]+arr[i+1][j]+arr[i+2][j]+arr[i+1][j+1]+arr[i][j+2]+arr[i+1][j+2]+arr[i+2][j+2];
            console.log(val,i,j);
            large = Math.max(val,large);
         }
     }
     return large;
 }
}
console.log(hourglassSum([[1,1,1,0,0,0],
                          [0,1,0,0,0,0],
                          [1,1,1,0,0,0],
                          [0,0,2,4,4,0],
                          [0,0,0,2,0,0],
                          [0,0,1,2,4,0]]));