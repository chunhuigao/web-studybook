function getPermutation(n, k) {
  let result = '';
  const list = Array(n)
    .fill(0)
    .map((v, i) => i + 1);
  let index = k - 1;
  for (let i = n; i > 0; i--) {
    const count = dfs(i - 1);
    const idx = Math.floor(index / count);
    index = index % count;
    result += list.splice(idx, 1);
  }
  console.log(result);

  function dfs(n) {
    let temp = 1;
    for (let i = 1; i <= n; i++) {
      temp *= i;
    }
    return temp;
  }
}

const testList = [[3, 3]];
testList.forEach((v) => {
  const [n, k] = v;
  getPernumtation(n, k);
});
