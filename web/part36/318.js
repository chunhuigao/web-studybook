var maxProduct = function (words) {
  const len = words.length
  let list = Array(len).fill(0)
  function stringToNumber(s) {
    return s.charCodeAt() - 'a'.charCodeAt()
  }
  for (let i = 0; i < len; i++) {
    const s = words[i]
    for (let j = 0; j < s.length; j++) {
      list[i] |= 1 << stringToNumber(s[j])
    }
  }
  let result = 0
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if ((list[i] & list[j]) == 0) {
        result = Math.max(result, words[i].length * words[j].length)
      }
    }
  }
  return result
}
