var truncateSentence = function (s, k) {
  let result = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') k--
    if (k === 0) return result
    result += s[i]
  }
  return result
}
