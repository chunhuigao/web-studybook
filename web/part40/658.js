var findClosestElements = function (arr, k, x) {
  const len = arr.length
  if (len === 1) return arr
  if (k === len) return arr
  let left = 0
  let right = len - 1
  while (right - left >= k) {
    const l = arr[left]
    const r = arr[right]
    if (Math.abs(l - x) <= Math.abs(r - x)) {
      right--
    } else {
      left++
    }
  }

  return arr.slice(left, right + 1)
}
