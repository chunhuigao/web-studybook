var lexicalOrder = function (n) {
  const list = [];
  for (let i = 1; i <= 9; i++) {
    dfs(i);
  }
  return list;

  function dfs(i) {
    if (i > n) return;
    list.push(i);
    for (let j = 0; j < 10; j++) {
      dfs(i * 10 + j);
    }
  }
};
