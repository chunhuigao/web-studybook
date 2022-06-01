var makesquare = function (matchsticks) {
  const t = matchsticks.reduce((a, b) => a + b);
  //console.log('t', t);
  if (t % 4 !== 0 || t === 0) return false;
  const len = matchsticks.length;
  matchsticks.sort((a, b) => b - a);

  if (len < 4) return false;
  const target = t / 4;
  let list = [0, 0, 0, 0];
  return dfs(0);
  function dfs(idx) {
    if (idx === len) {
      return list.filter((v) => v === target).length === 4;
    }
    for (let i = 0; i < 4; i++) {
      if (
        list[i] + matchsticks[idx] > target ||
        (i > 0 && list[i] === list[i - 1])
      )
        continue;
      list[i] += matchsticks[idx];
      if (dfs(idx + 1)) return true;
      list[i] -= matchsticks[idx];
    }
    return false;
  }
};
