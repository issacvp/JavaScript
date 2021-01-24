function calculateAverage(numbers) {
    let sum = 0;                                 // <== Constant number of time 
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];                       // <== Repeat every iteration based on the size of the numbers array 
    }
    return sum / numbers.length;                 // <== Constant number of time 
}
console.log(calculateAverage([2,3,4,1]));
// Complexity O(n*4) ==> O(n) where n is the length of the input array 
