var findTargetSumWays = function (nums, S) {
  let result = 0
  dfs(0, 0)
  return result
  function dfs(idx, t) {
    if (idx === nums.length) {
      if (t === S) result++
      return
    }

    dfs(idx + 1, t + nums[idx])
    dfs(idx + 1, t - nums[idx])
  }
}

var nums = [1, 1, 1, 1, 1],
  target = 3
var aa = findTargetSumWays(nums, target)
console.log(aa)
