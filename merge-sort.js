console.log("merge sort");
const merge = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const arr1 = arr.slice(0, mid);
  const arr2 = arr.slice(mid);

  const sortedArr1 = mergeSort(arr1);
  const sortedArr2 = mergeSort(arr2);

  return merge(sortedArr1, sortedArr2);
};

const testCases = [
  [312, 12, 343, 123, 2, 1],
  [12, 442, 21, 32134, 232323123, 3],
];

console.log("running test");
testCases.forEach((testCase) => {
  console.log("Sorted arr: ", mergeSort(testCase));
});
