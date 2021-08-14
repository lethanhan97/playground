console.log("merge sort");
const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;

  const result = [];
  while (i < arr1.length || j < arr2.length) {
    if (i >= arr1.length) {
      result.push(arr2[j]);
      j++;

      continue;
    }

    if (j >= arr2.length) {
      result.push(arr1[i]);
      i++;

      continue;
    }

    const cur1 = arr1[i];
    const cur2 = arr2[j];

    if (cur1 === cur2) {
      result.push(cur1);
      result.push(cur2);

      i++;
      j++;
    } else if (cur1 < cur2) {
      result.push(cur1);
      i++;
    } else {
      result.push(cur2);
      j++;
    }
  }

  return result;
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
