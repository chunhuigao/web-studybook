var firstPalindrome = function (words) {
  const len = words.length
  for (let i = 0; i < len; i++) {
    const s = words[i]
    if (isTreu(s)) {
      return s
    }
  }
  return ''

  function isTreu(s) {
    const t = s.split('').reverse().join('')
    return t === s
  }
}
