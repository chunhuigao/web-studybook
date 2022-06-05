var minMaxGame = function (nums) {
  const len = nums.length;
  if (len == 1) return nums[0];
  let newNums = [];
  for (let i = 0; i < len / 2; i++) {
    if (i % 2 === 0) {
      newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
    } else {
      newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
    }
  }
  return minMaxGame(newNums);
};
