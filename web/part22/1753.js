var maximumScore = function (a, b, c) {
  const total = a + b + c
  const max = Math.max(a, b, c)
  const min = Math.min(a, b, c)
  const mid = total - max - min
  if (mid + min === max) return max
  if (mid + min > max) {
    const diff = mid + min - max
    return max + Math.floor(diff / 2)
  } else {
    return mid + min
  }
}
