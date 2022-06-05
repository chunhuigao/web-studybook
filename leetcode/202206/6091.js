var partitionArray = function (nums, k) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  if (len === 1) return 1;
  let start = nums[0];
  let result = 1;
  for (let i = 1; i < len; i++) {
    if (start + k < nums[i]) {
      result++;
      start = nums[i];
    }
  }
  return result;
};
