var knightProbability = function (n, k, row, column) {
  const r = [1, 1, 2, 2, -1, -1, -2, -2]
  const c = [2, -2, 1, -1, 2, -2, 1, -1]
  const dp = []
  for (let i = 0; i <= k; i++) {
    dp[i] = []
    for (let j = 0; j < n; j++) {
      dp[i][j] = []
      for (let l = 0; l < n; l++) {
        dp[i][j][l] = 0
      }
    }
  }

  return dfs(row, column, k)

  function dfs(i, j, level) {
    if (i >= n || i < 0 || j >= n || j < 0) return 0
    if (level === 0) return 1
    if (dp[level][i][j]) return dp[level][i][j]
    for (let p = 0; p < 8; p++) {
      const x = i + r[p]
      const y = j + c[p]
      dp[level][i][j] = dp[level][i][j] + dfs(x, y, level - 1) * 0.125
    }

    return dp[level][i][j]
  }
}
