function start(s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const k = s[i];
    map[k] = (map[k] || 0) + 1;
  }
  const list = [];
  Object.keys(map).forEach((k) => {
    list.push([k, map[k]]);
  });
  list.sort((a, b) => {
    if (a[1] === b[1]) {
      let x = code(a[0]);
      let y = code(b[0]);
      if (x < 26) x += 58;
      if (y < 26) y += 58;

      return x - y;
    } else {
      return b[1] - a[1];
    }
  });
  const result = list.map((v) => `${v[0]}:${v[1]}`);
  console.log(result.join(';'));

  function code(s) {
    return s.charCodeAt() - 'A'.charCodeAt();
  }
}

const testList = ['xyxyXX', 'abababb', 'aaxyxyzzAAXXYYSS'];
testList.forEach((v) => {
  start(v);
});
