var minMoves2 = function (nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const idx = Math.floor(len / 2);
  const m = nums[idx];
  let result = 0;
  for (let i = 0; i < len; i++) {
    result += Math.abs(nums[i] - m);
  }
  return result;
};
