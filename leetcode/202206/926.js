var minFlipsMonoIncr = function (s) {
  const len = s.length;
  let one = 0;
  let zero = 0;
  for (let i = 0; i < len; i++) {
    let l = Math.min(one, zero);
    let o = zero;
    if (s[i] === '1') {
      o++;
    } else {
      l++;
    }
    one = l;
    zero = o;
  }
  return Math.min(one, zero);
};
