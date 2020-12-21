function mergeArrays(myArray, alicesArray) {
    const result = [];
    let i = 0, j = 0;
    while (i < myArray.length && j < alicesArray.length) {
        if (myArray[i] < alicesArray[j]) {
            result.push(myArray[i]);
            i++;
        } else {
            result.push(alicesArray[j]);
            j++;
        }
    }
    while (i < myArray.length) {
        result.push(myArray[i]);
        i++;
    }
    while (j < alicesArray.length) {
        result.push(alicesArray[j]);
        j++;
    }
    return result;
}

module.exports = mergeArrays;