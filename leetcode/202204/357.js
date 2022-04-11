var countNumbersWithUniqueDigits = function (n) {
  if (n === 0) return 1;
  if (n === 1) return 10;
  let r = 10;
  let base = 9;
  for (let i = 0; i < n - 1; i++) {
    base *= 9 - i;
    r += base;
  }
  return r;
};
