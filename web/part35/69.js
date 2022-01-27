var mySqrt = function (x) {
  if (x === 1) return 1
  let result = 0
  let left = 0
  let right = Math.floor(x / 2)
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    const t = mid * mid
    if (t === x) return mid
    if (t < x) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return left * left > x ? left - 1 : left
}
