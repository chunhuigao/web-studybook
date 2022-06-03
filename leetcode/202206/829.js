var consecutiveNumbersSum = function (n) {
  if (n === 1) return 1;
  let r = 1;
  for (let i = 2; i <= Math.sqrt(2 * n); i++) {
    if (check(i)) {
      r++;
    }
  }
  return r;

  function check(i) {
    const c = n / i + 1 / 2 - i / 2;
    return c % 1 === 0 && c > 0;
  }
};
