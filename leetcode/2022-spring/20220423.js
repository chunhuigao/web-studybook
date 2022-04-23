var conveyorBelt = function (matrix, start, end) {
  const m = matrix.length;
  const n = matrix[0].length;
  const max = Math.abs(start[0] - end[0]) + Math.abs(start[1] - end[1]);
  const list = [];
  for (let i = 0; i < m; i++) {
    list[i] = [];
    for (let j = 0; j < n; j++) {
      list[i][j] = max;
    }
  }

  const row = [0, 0, 1, -1];
  const col = [-1, 1, 0, 0];

  dfs(start[0], start[1], 0, []);
  const [x, y] = end;
  return list[x][y];
  function dfs(i, j, l) {
    if (i < 0 || j < 0 || i >= m || j >= n) return;
    if (list[i][j] <= l) return;
    list[i][j] = Math.min(list[i][j], l);

    if (i === end[0] && j === end[1]) {
      return;
    }

    if (matrix[i][j] === '<') {
      dfs(i, j - 1, l);
    }
    if (matrix[i][j] === '>') {
      dfs(i, j + 1, l);
    }
    if (matrix[i][j] === '^') {
      dfs(i - 1, j, l);
    }
    if (matrix[i][j] === 'v') {
      dfs(i + 1, j, l);
    }
    for (let k = 0; k < 4; k++) {
      const x = row[k] + i;
      const y = col[k] + j;
      if (x >= 0 && x < m && y >= 0 && y < n) {
        dfs(x, y, l + 1);
      }
    }
  }
};
