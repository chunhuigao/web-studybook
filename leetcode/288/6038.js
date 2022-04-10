var minimizeResult = function (expression) {
  const len = expression.length;
  const array = expression.split('+');
  const left = array[0];
  const right = array[1];
  if (len === 3) {
    return `(${expression})`;
  }
  let min = add(left, right);
  let result = `(${expression})`;
  const l = left.length;
  const r = right.length;

  // a * (b+ c) * d
  for (let i = 0; i < l; i++) {
    for (let j = 1; j <= r; j++) {
      const a = left.substr(0, i) || 1;
      const b = left.substr(i, l) || 0;
      const c = right.substr(0, j) || 0;
      const d = right.substr(j, r) || 1;
      const t = a * d * add(b, c);

      if (t < min) {
        min = t;
        result =
          left.substr(0, i) +
          '(' +
          left.substr(i, l) +
          '+' +
          right.substr(0, j) +
          ')' +
          right.substr(j, r);
      }
    }
  }
  return result;

  function add(a, b) {
    return Number(a) + Number(b);
  }
};
