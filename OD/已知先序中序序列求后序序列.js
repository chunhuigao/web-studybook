function start([pre, mid]) {
  //   const pre = 'DBACEGF';
  //   const mid = 'ABCDEFG';
  let result = '';
  dfs(0, 0, pre.length - 1);
  console.log(result);

  function dfs(root, left, right) {
    if (left > right) return;
    let i = left;
    while (i < right && mid[i] !== pre[root]) i++;
    dfs(root + 1, left, i - 1);
    dfs(root + 1 + i - left, i + 1, right);
    result += pre[root];
  }
}

const testList = [['DBACEGF', 'ABCDEFG']];
testList.forEach((v) => {
  start(v);
});
