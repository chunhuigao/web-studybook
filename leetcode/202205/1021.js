var removeOuterParentheses = function (S) {
  let num = 0;
  let l = S.length;
  let redult = '';
  for (let i = 0; i < l; i++) {
    if (S[i] == '(') {
      if (++num > 1) {
        redult += '(';
      }
    } else {
      if (--num > 0) {
        redult += ')';
      }
    }
  }
  return redult;
};
