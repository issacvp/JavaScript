
function stringifyNumbers(obj) {
    for (var val in obj) {
        if (typeof obj[val] === 'object' && obj[val] !== null) {
            stringifyNumbers(obj[val]);
        } else if (Number.isFinite(obj[val])) {
            obj[val] = obj[val].toString(10);
        }
    }
}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

stringifyNumbers(obj);
obj
