var minDeletions = function (s) {
  const list = Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    const k = s[i]
    const idx = k.charCodeAt() - 'a'.charCodeAt()
    list[idx]++
  }
  const map = {}
  let array = []
  for (let i = 0; i < 26; i++) {
    const k = list[i]
    if (k === 0) continue
    if (map[k]) {
      array.push(k)
    } else {
      map[k] = 1
    }
  }
  let result = 0
  for (let i = 0; i < array.length; i++) {
    let c = array[i]
    while (map[c]) {
      c--
      result++
    }
    if (c > 0) map[c] = 1
  }
  return result
}
