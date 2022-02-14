const map = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
}
var letterCombinations = function (digits) {
  const len = digits.length
  if (len === 0) return []
  const list = []
  for (let i = 0; i < len; i++) {
    const k = digits[i]
    list.push(map[k])
  }
  const result = []
  dfs(0, [])
  return result
  function dfs(idx, path) {
    if (path.length === len) {
      const t = path.join('')
      result.push(t)
      return
    }

    for (let i = 0; i < list[idx].length; i++) {
      const s = list[idx][i]
      path.push(s)
      dfs(idx + 1, path)
      path.pop()
    }
  }
}
