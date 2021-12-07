/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function (grid, row, col, color) {
  const t = grid[row][col]
  const m = grid.length
  const n = grid[0].length
  let key = '-'
  const map = new Map()
  map.set(`${row},${col}`, grid[row][col])
  // 染色
  grid[row][col] = key
  helper(row, col)
  const list = []
  for (let i = 0; i < m; i++) {
    list[i] = []
    for (let j = 0; j < n; j++) {
      list[i][j] = grid[i][j]
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === key) {
        // 上下左右都是key，将此位置数据还原
        let num = 0
        if (i - 1 >= 0 && list[i - 1][j] === key) num++
        if (i + 1 < m && list[i + 1][j] === key) num++
        if (j - 1 >= 0 && list[i][j - 1] === key) num++
        if (j + 1 < n && list[i][j + 1] === key) num++

        if (num === 4) {
          //console.log('map.get(`${i},${j}`)',map.get(`${i},${j}`))
          grid[i][j] = map.get(`${i},${j}`)
        }
      }
    }
  }
  //console.log('grid',grid)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === key) {
        grid[i][j] = color
      }
    }
  }
  // console.log('grid',grid)
  return grid

  function helper(i, j) {
    const r = [0, 0, 1, -1]
    const c = [-1, 1, 0, 0]
    for (let k = 0; k < 4; k++) {
      const x = r[k] + i
      const y = c[k] + j
      if (x >= 0 && y >= 0 && x < m && y < n && grid[x][y] === t) {
        map.set(`${x},${y}`, grid[x][y])
        grid[x][y] = key

        helper(x, y)
      }
    }
  }
}
