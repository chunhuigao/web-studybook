var numIslands = function (grid) {
  const m = grid.length
  const n = grid[0].length
  let index = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        index--
        grid[i][j] = index
        helper(i, j, index)
      }
    }
  }
  return Math.abs(index)

  function helper(i, j, level) {
    const col = [0, 0, 1, -1]
    const row = [1, -1, 0, 0]
    for (let k = 0; k < 4; k++) {
      const x = i + col[k]
      const y = j + row[k]
      if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] === '1') {
        grid[x][y] = level
        helper(x, y, level)
      }
    }
  }
}
