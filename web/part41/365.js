var canMeasureWater = function (x, y, z) {
  if (x === 0 && y === 0) return z === 0
  if (z > x + y) return false
  let temp = y === 0 ? helper(y, x) : helper(x, y)

  return z % temp === 0
  function helper(x, y) {
    return x % y === 0 ? y : helper(y, x % y)
  }
}
