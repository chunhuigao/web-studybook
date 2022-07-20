function taskSchedule(list) {
  const m = list.length;
  const matrix = [];
  let n = 0;
  for (let i = 0; i < m; i++) {
    matrix[i] = list[i].split(' ');
    n = matrix[i].length;
  }

  const col = [-1, 0, 1, 0];
  const row = [0, -1, 0, 1];
  const paths = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '2') {
        paths.push([i, j]);
      }
    }
  }
  function getDp(m, n) {
    let dp = [];
    for (let i = 0; i < m; i++) {
      dp[i] = [];
      for (let j = 0; j < n; j++) {
        dp[i][j] = 0;
      }
    }
    return dp;
  }
  const dp1 = getDp(m, n);
  const dp2 = getDp(m, n);

  dfs(paths[0][0], paths[0][1], dp1);
  dfs(paths[1][0], paths[1][1], dp2);
  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dp1[i][j] === 2 && dp2[i][j] === 2) result++;
    }
  }
  console.log(result);

  function dfs(i, j, dp) {
    for (let k = 0; k < 4; k++) {
      const x = col[k] + i;
      const y = row[k] + j;
      if (
        x >= 0 &&
        x < m &&
        y >= 0 &&
        y < n &&
        dp[x][y] === 0 &&
        matrix[x][y] !== '1'
      ) {
        if (matrix[x][y] === '3') {
          dp[x][y] = 2;
        } else {
          dp[x][y] = 1;
        }

        dfs(x, y, dp);
      }
    }
  }
}

const testList = [
  ['2 1 2 3', '0 1 0 0', '0 1 0 0', '0 1 0 0'],
  ['2 1 0 3', '0 1 2 1', '0 3 0 0', '0 0 0 0'],
];
testList.forEach((v) => {
  taskSchedule(v);
});
