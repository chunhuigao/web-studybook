var maxArea = function (height) {
  const len = height.length
  let left = 0
  let right = len - 1
  let result = 0
  while (left < right) {
    const total = (right - left) * Math.min(height[left], height[right])
    if (height[left] >= height[right]) {
      right--
    } else {
      left++
    }
    result = Math.max(total, result)
  }

  return result
}
