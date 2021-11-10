var judgeSquareSum = function (c) {
  const n = Math.sqrt(c)
  if (n % 1 === 0) return true
  const end = Math.floor(n)
  const map = {}
  for (let i = 0; i <= end; i++) {
    const t = Math.pow(i, 2)
    const r = c - t
    map[t] = 1
    if (map[r] === undefined) {
      map[r] = 1
    } else {
      return true
    }
  }
  return false
}
