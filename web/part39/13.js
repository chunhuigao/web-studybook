var movingCount = function (m, n, k) {
  let result = 0
  let array = Array(m)
  for (let i = 0; i < m; i++) {
    array[i] = Array(n).fill(0)
  }
  dfs(0, 0, k)
  return result
  function dfs(i, j, k) {
    if (
      i >= 0 &&
      j >= 0 &&
      i < m &&
      j < n &&
      array[i][j] !== 1 &&
      helper(i) + helper(j) <= k
    ) {
      result++
      const low = [-1, 1, 0, 0]
      const row = [0, 0, -1, 1]
      array[i][j] = 1
      for (let s = 0; s < 4; s++) {
        const x = i + low[s]
        const y = j + row[s]
        dfs(x, y, k)
      }
    }
  }
  function helper(x) {
    let num = 0
    while (x >= 1) {
      num += x % 10
      x = Math.floor(x / 10)
    }
    return num
  }
}
