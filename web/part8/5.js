var countSubstrings = function (s) {
  const len = s.length
  let result = 0
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < 2; j++) {
      let left = i
      let right = i + j
      while (left >= 0 && right < len && s[left--] === s[right++]) {
        result++
      }
    }
  }
  return result
}
