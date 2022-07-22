function start(m, n, times) {
  let list = times.map((v) => v.split(' ').map((v) => Number(v)));
  list.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i <= n; i++) {
    if (helper(i)) {
      console.log(i);
      break;
    }
  }

  function helper(max) {
    const stack = Array(max)
      .fill(0)
      .map(() => Array(2).fill(0));

    for (let i = 0; i < list.length; i++) {
      const [s, t] = list[i];
      stack.sort((a, b) => {
        if (a[1] === b[1]) {
          return a[0] - b[0];
        } else {
          return a[1] - b[1];
        }
      });

      const [times, count] = stack[0];
      if (count >= m) return false;
      if (times > s) return false;
      stack[0][0] = t;
      stack[0][1] += 1;
    }
    return true;
  }
}

const testList = [
  [2, 5, ['1 2', '2 3', '3 4', '4 5', '5 6']],
  [3, 3, ['1 2', '2 3', '3 4']],
  [3, 3, ['8 35', '5 10', '1 3']],
  [2, 4, ['1 2', '3 5', '4 7', '6 8']],
];
testList.forEach((v) => {
  const [s1, s2, s3] = v;
  start(s1, s2, s3);
});
