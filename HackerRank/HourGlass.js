/*

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0

2 4 4
  2
1 2 4

-9 <= arr[i][j] <= 9
0<=i,j <=5
Need a moving window of 3*3 through out the main array and find the sum of it.
*/


function largestHourGlass(arr){
    var largestSum = -Infinity;
    for(let i=0; i<4;i++){
        let sum = 0;
        for(let j=0; j<4; j++){
            console.log(arr[i][j],arr[i][j+1],arr[i][j+2]);
            console.log(arr[i+1][j],arr[i+1][j+1],arr[i+1][j+2]);
            console.log(arr[i+2][j],arr[i+2][j+1],arr[i+2][j+2]);
            sum =arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2];

            if(sum > largestSum){
                largestSum = sum;
            }
            console.log("");
        }
        
    }
    return largestSum;
}

console.log(largestHourGlass([[1,1,1,0,0,0],[0,1,0,0,0,0],[1,1,1,0,0,0],[0,0,2,4,4,0],[0,0,0,2,0,0],[0,0,1,2,4,0]]));


