function cutApple(s) {
  const list = s.split(' ');
  const len = list.length;
  if (len === 1) {
    console.log(-1);
  } else {
    const total = list.reduce((a, b) => Number(a) + Number(b));
    let result = -1;
    const dfs = (level, sum, xor) => {
      if (level === list.length) {
        const diff = total - sum;
        if (diff === xor && level !== 0 && diff !== 0) {
          result = Math.max(result, sum);
        }

        return;
      }
      dfs(level + 1, sum + Number(list[level]), xor ^ Number(list[level]));
      dfs(level + 1, sum, xor);
    };
    dfs(0, 0, 0);
    console.log('result', result);
  }
}

var testList = ['3 5 6', '7258 6579 2602 6716 3050 3564 5396 1773', '12 5 9'];

testList.forEach((v) => {
  cutApple(v);
});
