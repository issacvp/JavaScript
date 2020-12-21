function FindIntersection(strArr) {
  const array1 = strArr[0].split(",").map((n) => Number.parseInt(n, 10));
  const array2 = strArr[1].split(",").map((n) => Number.parseInt(n, 10));
  const result = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] === array2[j]) {
      result.push(array1[i]);
      i++;
      j++;
    } else if (array1[i] < array2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result.length > 0 ? result.join(",") : false;
}

test("Two Intersecting arrays ", () => {
  expect(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])).toStrictEqual('1,4,13');
});

test("Two Intersecting arrays ", () => {
    expect(FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"])).toStrictEqual('1,9,10');
});

test("Two Intersecting arrays ", () => {
    expect(FindIntersection(["1, 3, 9, 10, 17, 18", "19,20,21"])).toStrictEqual(false);
});
