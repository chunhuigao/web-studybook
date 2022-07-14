/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const max = 2147483647;
  const min = -2147483648;
  let result = 0;
  while (x !== 0) {
    const temp = x % 10;
    result = result * 10 + temp;
    x = ~~(x / 10);
  }

  return result > max || result < min ? 0 : result;
};
