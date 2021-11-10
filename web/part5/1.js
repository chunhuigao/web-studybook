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

// 二分法

var judgeSquareSum = function (c) {
  let left = 0
  let right = Math.ceil(Math.sqrt(c))
  while (left <= right) {
    const t = Math.pow(left, 2) + Math.pow(right, 2)
    if (t === c) return true
    if (t < c) {
      left = left + 1
    } else {
      right = right - 1
    }
  }
  return false
}
