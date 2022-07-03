/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  const nums = String(n)
    .split('')
    .map((num) => +num);
  let i = nums.length - 1;
  let j = i;

  const stack = [];
  for (; i >= 0; i--) {
    if (stack.length && nums[i] < nums[stack[stack.length - 1]]) {
      while (stack.length && nums[i] < nums[stack[stack.length - 1]]) {
        j = stack.pop();
      }
      break;
    }
    stack.push(i);
  }

  if (i < 0) {
    return -1;
  }
  [nums[i], nums[j]] = [nums[j], nums[i]];
  const ans = +(
    nums.slice(0, i + 1).join('') +
    nums
      .slice(i + 1)
      .sort((a, b) => a - b)
      .join('')
  );
  return ans > 2147483647 ? -1 : ans;
};
