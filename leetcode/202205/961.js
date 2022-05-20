var repeatedNTimes = function (A) {
  let l = A.length;
  for (let i = 0; i < l - 1; i++) {
    if (A[i] == A[i + 1] || A[i] == A[i + 2]) {
      return A[i];
    }
  }
  return A[0];
};
