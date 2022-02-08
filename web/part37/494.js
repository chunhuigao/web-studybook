// f[i][j]=f[i−1][j−nums[i−1]]+f[i−1][j+nums[i−1]]
var findTargetSumWays = function (nums, S) {
  const len = nums.length
  const t = nums.reduce((a, b) => Math.abs(a) + Math.abs(b))
  //动态规划
  const dp = []
  for (let i = 0; i <= len; i++) {
    dp[i] = Array(2 * t + 1).fill(0)
  }
  if (Math.abs(S) > Math.abs(t)) return 0

  dp[0][0 + t] = 1

  for (let i = 1; i <= len; i++) {
    const c = nums[i - 1]
    for (let j = -t; j <= t; j++) {
      if (j - c + t >= 0) {
        dp[i][j + t] += dp[i - 1][j - c + t]
      }
      if (j + c + t <= 2 * t) {
        dp[i][j + t] += dp[i - 1][j + c + t]
      }
    }
  }
  //console.log('dp', dp)
  return dp[len][S + t]
}

var nums = [1],
  target = 3
var aa = findTargetSumWays(nums, target)
console.log(aa)
