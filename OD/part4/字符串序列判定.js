function start(s, t) {
  let idx1 = 0;
  let idx2 = 0;
  const len = t.length;
  let result = 0;
  while (idx2 < len) {
    if (s[idx1] === t[idx2]) {
      idx1++;
      result = idx2;
    }
    idx2++;
  }
  if (idx1 === s.length) {
    console.log(result);
  } else {
    console.log(-1);
  }
}

const testList = [
  ['ace', 'abcdver'],
  ['fgh', 'abcde'],
];
testList.forEach((v) => {
  const [s1, s2] = v;
  start(s1, s2);
});
