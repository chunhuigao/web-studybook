var largestInteger = function (num) {
  const s = String(num);
  const len = s.length;
  if (len === 1) return num;
  let j = [];
  let o = [];
  for (let i = 0; i < len; i++) {
    if (s[i] % 2 === 1) {
      j.push(s[i]);
    } else {
      o.push(s[i]);
    }
  }
  j.sort((a, b) => b - a);
  o.sort((a, b) => b - a);
  let result = [];
  for (let i = 0; i < len; i++) {
    if (s[i] % 2 === 1) {
      result[i] = j.shift();
    } else {
      result[i] = o.shift();
    }
  }
  return result.filter((v) => v).join('');
};
