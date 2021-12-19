var addSpaces = function (s, spaces) {
  const len = s.length
  const set = new Set()
  spaces.forEach((v) => {
    set.add(v)
  })
  let result = ''
  for (let i = 0; i < len; i++) {
    if (set.has(i)) {
      result += ' ' + s[i]
    } else {
      result += s[i]
    }
  }
  return result
}
