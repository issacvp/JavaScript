function sumArray(numbers) {
    let sum = 0;
    for(let i=0;i<numbers.length;i++){
        sum +=numbers[i];
    }
    return sum;
};

const array = [5,76,40,48,24,18,62,100,99,22,95,72,91];
const startTime = new Date();
console.log(sumArray(array));
const endTime = new Date();
const elapsedTime = endTime - startTime;
console.log(`Finished in ${elapsedTime} ms.`);