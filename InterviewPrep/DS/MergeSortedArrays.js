function merge(arr1, arr2) {
    let resultArr = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            resultArr.push(arr1[i++]);
        } else {
            resultArr.push(arr2[j++]);
        }
    }
    while (i < arr1.length) {
        resultArr.push(arr1[i++]);
    }
    while (j < arr2.length) {
        resultArr.push(arr2[j++]);
    }
    return resultArr;
}

var result = merge([0, 3, 4, 31], [4, 6, 30]);
result

result = merge([], [4, 6, 30]);
result

result = merge([0, 3, 4, 31], []);
result