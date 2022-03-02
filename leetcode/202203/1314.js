/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, k) {
  const m = mat.length
  const n = mat[0].length
  const dp = []
  for (let i = 0; i <= m; i++) {
    dp[i] = []
    for (let j = 0; j <= n; j++) {
      dp[i][j] = 0
    }
  }
  // 计算前缀和
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        dp[i - 1][j] + dp[i][j - 1] + mat[i - 1][j - 1] - dp[i - 1][j - 1]
    }
  }

  console.log('dp', dp)

  let result = []
  for (let i = 1; i <= m; i++) {
    result[i - 1] = []
    for (let j = 1; j <= n; j++) {
      let m0 = Math.max(i - k - 1, 0)
      let n0 = Math.max(j - k - 1, 0)
      let m1 = Math.min(i + k, m)
      let n1 = Math.min(j + k, n)

      // 前缀最远 + 后缀最远 +
      result[i - 1][j - 1] = dp[m0][n0] + dp[m1][n1] - dp[m1][n0] - dp[m0][n1]
      if (i === 3 && j === 3) {
        console.log(
          m0,
          n0,
          m1,
          n1,
          dp[m0][n0],
          dp[m1][n1],
          dp[m1][n0],
          dp[m0][n1]
        )
      }
    }
  }

  return result
}

var mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  k = 1
var aa = matrixBlockSum(mat, k)
