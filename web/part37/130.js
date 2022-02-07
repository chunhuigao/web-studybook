var solve = function (board) {
  const m = board.length
  const n = board[0].length
  const row = [1, -1, 0, 0]
  const col = [0, 0, 1, -1]
  // 左右
  for (let i = 0; i < m; i++) {
    if (board[i][0] === 'O') {
      helper(i, 0)
    }
    if (board[i][n - 1] === 'O') {
      helper(i, n - 1)
    }
  }
  // 上下
  for (let i = 0; i < n; i++) {
    if (board[0][i] === 'O') {
      helper(0, i)
    }
    if (board[m - 1][i] === 'O') {
      helper(m - 1, i)
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === '-') {
        board[i][j] = 'O'
      } else {
        board[i][j] = 'X'
      }
    }
  }

  return board

  function helper(i, j) {
    board[i][j] = '-'
    for (let k = 0; k < 4; k++) {
      const x = i + row[k]
      const y = j + col[k]
      if (x >= 0 && x < m && y >= 0 && y < n && board[x][y] === 'O') {
        helper(x, y)
      }
    }
  }
}
