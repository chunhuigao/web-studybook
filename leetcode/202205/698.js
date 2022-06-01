var canPartitionKSubsets = function (nums, k) {
  const total = nums.reduce((a, b) => a + b);
  if (total % k !== 0) return false;
  const target = total / k;
  const list = Array(k).fill(0);
  const len = nums.length;
  return dfs(0);
  function dfs(index) {
    if (index === len) return true;
    for (let i = 0; i < k; i++) {
      if (list[i] + nums[index] <= target) {
        list[i] += nums[index];
        if (dfs(index + 1)) return true;
        list[i] -= nums[index];
      }
      if (list[i] === 0 || list[i] + nums[index] === target) break;
    }
    return false;
  }
};
