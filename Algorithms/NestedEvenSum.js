const assert = require('assert');

function nestedEvenSum(obj) {
    var value = 0;
    for (var val in obj) {
        if (typeof obj[val] === 'object' && obj[val] !== null) {
            value += nestedEvenSum(obj[val]);
        } else if (Number.isFinite(obj[val]) && obj[val] % 2 === 0) {
            value += obj[val];
        }
    }
    return value;
}


var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

assert.strictEqual(nestedEvenSum(obj1), 6);
assert.strictEqual(nestedEvenSum(obj2), 11);