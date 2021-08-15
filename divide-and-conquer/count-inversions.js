console.log("Count Inversions");

const countSplitInversions = (left, right) => {
  let lP = 0;
  let rP = 0;
  let count = 0;
  let res = [];

  while (lP < left.length || rP < right.length) {
    const curL = lP < left.length ? left[lP] : Number.MAX_VALUE;
    const curR = rP < right.length ? right[rP] : Number.MAX_VALUE;

    if (curL < curR) {
      res.push(curL);
      lP++;
    } else {
      res.push(curR);
      count += left.length - lP;
      rP++;
    }
  }

  return [count, res];
};

const countInversions = (arr) => {
  if (arr.length <= 1) return [0, arr];

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const [leftCount, leftSorted] = countInversions(left);
  const [rightCount, rightSorted] = countInversions(right);
  const [splitCount, sorted] = countSplitInversions(leftSorted, rightSorted);

  return [leftCount + rightCount + splitCount, sorted];
};

const testCases = [
  [1, 3, 5, 2, 4, 6],
  [312, 12, 343, 123, 2, 1],
  [12, 442, 21, 32134, 232323123, 3],
];

testCases.forEach((testCase) => {
  const res = countInversions(testCase);
  console.log("Inversion Count: ", res[0]);
  console.log("Sorted Arr: ", res[1]);
});
