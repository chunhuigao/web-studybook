var removeOuterParentheses = function (s) {
  let num = 0
  let l = s.length
  let redult = ''
  for (let i = 0; i < l; i++) {
    if (s[i] == '(') {
      if (++num > 1) {
        redult += '('
      }
    } else {
      if (--num > 0) {
        redult += ')'
      }
    }
  }
  return redult
}
