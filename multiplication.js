console.log("Multiplication algorithm");

// Utilities
const singleDigitMultiply = (x, y) => {
  // y should be less than 10
  let result = 0;

  for (let i = 0; i < y; i++) {
    result += x;
  }

  return result;
};

// Brute force
const multiply = (x, y) => {
  // O(n^2)
  let result = 0;
  let strY = String(y);
  let len = strY.length;

  for (let i = len - 1; i >= 0; i--) {
    const curNum = +strY[i];
    const curMultiplication = singleDigitMultiply(x, curNum);
    const curMultiplier = Math.pow(10, len - i - 1); // O(1)

    result += curMultiplication * curMultiplier;
  }

  return result;
};

const karatsuba = (x, y) => {
  if (x < 10 && y < 10) return x * y;

  // Todo fill in method
  return x * y;
};

const testCases = [
  [
    3141592653589793238462643383279502884197169399375105820974944592,
    2718281828459045235360287471352662497757247093699959574966967627,
  ],
];

testCases.forEach((testCase) => {
  console.log(
    `Result for ${testCase[0]} * ${testCase[1]} is ${
      testCase[0] * testCase[1]
    } and algo answer is: `,
    multiply(testCase[0], testCase[1])
  );
});
