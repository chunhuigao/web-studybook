var smallestRangeI = function (A, K) {
  let l = A.length;
  let max = A[0];
  let min = A[0];
  for (let i = 1; i < l; i++) {
    max = Math.max(max, A[i]);
    min = Math.min(min, A[i]);
  }
  return Math.max(0, max - min - 2 * K);
};
