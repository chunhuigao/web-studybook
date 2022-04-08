/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  const total = nums.reduce((a, b) => a + b);
  if (total < target) return 0;
  const len = nums.length;
  let left = 0;
  let right = nums.length;
  let result = 0;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (check(mid)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
      // result = mid
    }
  }
  //console.log(left,right,result)
  return result;

  function check(m) {
    let max = -Infinity;
    let t = 0;
    for (let i = 0; i < len; i++) {
      t += nums[i];
      if (i >= m - 1) {
        max = Math.max(max, t);
        t -= nums[i - m + 1];
      }
    }
    max = Math.max(max, t);

    return max >= target;
  }
};
