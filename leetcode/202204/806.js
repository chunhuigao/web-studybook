var numberOfLines = function (widths, s) {
  const len = s.length;
  let curr = 0;
  let result = 0;
  for (let i = 0; i < len; i++) {
    const c = code(s[i]);
    const w = widths[c];
    if (w + curr <= 100) {
      curr += w;
    } else {
      curr = w;
      result += 1;
    }
  }

  return [result + 1, curr];

  function code(s) {
    return s.charCodeAt() - 'a'.charCodeAt();
  }
};
