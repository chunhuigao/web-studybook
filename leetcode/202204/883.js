var projectionArea = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let bottom = 0;
  let left = 0;
  for (let i = 0; i < m; i++) {
    let max = -1;
    for (let j = 0; j < n; j++) {
      bottom = bottom + (grid[i][j] > 0 ? 1 : 0);
      max = Math.max(max, grid[i][j]);
    }
    left += max;
  }
  let right = 0;
  for (let i = 0; i < n; i++) {
    let max = -1;
    for (let j = 0; j < m; j++) {
      max = Math.max(max, grid[j][i]);
    }
    right += max;
  }

  return bottom + left + right;
};
