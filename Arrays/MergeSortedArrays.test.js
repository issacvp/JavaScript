const  mergeArrays = require('./MergeSortedArrays');

test("both arrays are empty", () => {
  expect(mergeArrays([], [])).toStrictEqual([]);
});

test("first array is empty", () => {
  expect(mergeArrays([], [1, 2, 3])).toStrictEqual([1, 2, 3]);
});

test("second array is empty", () => {
  expect(mergeArrays([5, 6, 7], [])).toStrictEqual([5, 6, 7]);
});

test("both arrays have some numbers", () => {
  expect(mergeArrays([2, 4, 6], [1, 3, 7])).toStrictEqual([1, 2, 3, 4, 6, 7]);
});

test("arrays are different lengths", () => {
  expect(mergeArrays([2, 4, 6, 8], [1, 7])).toStrictEqual([1, 2, 4, 6, 7, 8]);
});
