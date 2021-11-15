var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length
  const n = text2.length
  let dp = Array(m + 1).fill([])
  for (let i = 0; i <= m; i++) {
    dp[i] = Array(n + 1).fill(0)
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[m][n]
}

var text1 = 'abc',
  text2 = 'def'
const aa = longestCommonSubsequence(text1, text2)
console.log(aa)
