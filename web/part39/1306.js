var canReach = function (arr, start) {
  const len = arr.length
  const list = Array(len).fill(0)
  const stack = [start]
  while (stack.length) {
    const p = stack.pop()
    if (arr[p] === 0) return true
    const left = p + arr[p]
    if (left >= 0 && left < len && list[left] === 0) {
      stack.push(left)
      list[left] = 1
    }
    const right = p - arr[p]
    if (right >= 0 && right < len && list[right] === 0) {
      stack.push(right)
      list[right] = 1
    }
  }
  return false
}
