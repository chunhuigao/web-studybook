function start(s, n) {
  let a1 = 1;
  const list = [];
  if ((2 * s) % n !== 0) {
    console.log(-1);
  } else if (((2 * s) / n - n) % 2 == 0) {
    console.log(-1);
  } else {
    a1 = ((2 * s) / n + 1 - n) / 2;
    for (let i = 0; i < n; i++) {
      list.push(a1 + i);
    }
    console.log(list.join(' '));
  }
}

const testList = [['525', '6']];
testList.forEach((v) => {
  const [s1, s2] = v;
  start(Number(s1), Number(s2));
});
