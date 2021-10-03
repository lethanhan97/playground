console.log("Find closes points");

class Point {
  x = 0;
  y = 0;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static findEucledianDistance(i, j) {
    return Math.sqrt(Math.pow(i.x - j.x, 2) + Math.pow(i.y - j.y, 2));
  }
}

// Divide and Conquer
// O(nlogn)
const dndClosestPoint = (points) => {
  const result = dndClosestPointHelper(points);

  return result[0];
};

// Returns [answer array, eucledian distance, sorted points]
const dndClosestPointHelper = (points) => {
  if (points.length < 2) return [points, 0, points];

  const mid = Math.floor(points.length / 2);
  const leftHalf = points.slice(0, mid);
  const rightHalf = points.slice(mid);

  const sortedLeft = dndClosestPoint(leftHalf);
  const sortedRight = dndClosestPoint(rightHalf);

  const result = merge(sortedLeft, sortedRight);
  return result;
};

const merge = (left, right) => {
  let lP = 0;
  let rP = 0;
  const sortedPoints = [];
  let result = [left[0], right[0]];
  let shortestDistance = Number.MAX_VALUE;

  while (lP < left.length || rP < right.length) {
    const curLeft =
      lP < left.length
        ? left[lP]
        : new Point(Number.MAX_VALUE, Number.MAX_VALUE);
    const curRight =
      rP < right.length
        ? right[rP]
        : new Point(Number.MAX_VALUE, Number.MAX_VALUE);

    if (isLeftNearer(curLeft, curRight)) {
      sortedPoints.push(curLeft);
      lP++;
    } else {
      sortedPoints.push(curRight);
      rP++;
    }

    if (sortedPoints.length >= 2) {
      const sortedPointsLen = sortedPoints.length;
      const distance = Point.findEucledianDistance(
        sortedPoints[sortedPointsLen - 1],
        sortedPoints[sortedPointsLen - 2]
      );

      if (distance <= shortestDistance) {
        result = [
          sortedPoints[sortedPointsLen - 1],
          sortedPoints[sortedPointsLen - 2],
        ];
        shortestDistance = distance;
      }
    }
  }

  return [result, shortestDistance, sortedPoints];
};

const isLeftNearer = (left, right) => {
  const origin = new Point(0, 0);
  const leftDistance = Point.findEucledianDistance(origin, left);
  const rightDistance = Point.findEucledianDistance(origin, right);

  return leftDistance < rightDistance;
};

// Brute force
// O(n^2)
const bruteForceClosestPoint = (points) => {
  let result = [];
  let smallestDistance = Number.MAX_VALUE;

  for (let i = 0; i < points.length; i++) {
    const currentPoint = points[i];
    for (let j = i + 1; j < points.length; j++) {
      const currentComparisonPoint = points[j];
      const distance = Point.findEucledianDistance(
        currentPoint,
        currentComparisonPoint
      );

      if (distance < smallestDistance) {
        result = [currentPoint, currentComparisonPoint];
        smallestDistance = distance;
      }
    }
  }

  return result;
};

const testCases = [
  [0, 2],
  [3, 10],
  [12, 9],
  [11, 9],
  [11, 10],
  [110, 29],
  [87, 1],
  [11, 4],
];

const points = testCases.map(([x, y]) => {
  return new Point(x, y);
});

console.log(bruteForceClosestPoint(points));
console.log(dndClosestPoint(points));
