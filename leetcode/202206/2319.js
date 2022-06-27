var checkXMatrix = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j && grid[i][j] === 0) return false;
      if (i + j === n - 1 && grid[i][j] === 0) return false;
      if (i === j) continue;
      if (i + j === n - 1) continue;
      if (grid[i][j] !== 0) return false;
    }
  }
  return true;
};
