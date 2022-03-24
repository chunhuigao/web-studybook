var imageSmoother = function (M) {
  //0变化后1==>2
  //1变换后0==>-1;
  const m = M.length;
  if (m === 0) return [];
  const n = M[0].length;
  let array = Array(m);
  for (let i = 0; i < m; i++) {
    array[i] = Array(n).fill(0);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const n = helper(i, j);
      array[i][j] = n;
    }
  }
  return array;
  function helper(i, j) {
    const row = [-1, 0, 1, -1, 0, 1, -1, 0, 1];
    const col = [-1, -1, -1, 0, 0, 0, 1, 1, 1];
    let total = 0;
    let num = 0;
    for (let k = 0; k < 9; k++) {
      const x = row[k] + i;
      const y = col[k] + j;
      if (x >= 0 && x < m && y >= 0 && y < n) {
        const n = M[x][y];
        total += n;
        num++;
      }
    }
    return Math.floor(total / num);
  }
};
