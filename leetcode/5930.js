var maxDistance = function (colors) {
  const len = colors.length
  if (colors[0] !== colors[len - 1]) return len - 1
  let left = 0

  while (colors[left] === colors[0]) {
    left++
  }
  let right = len - 1
  while (colors[right] === colors[len - 1]) {
    right--
  }

  return Math.max(left, len - 1 - right, len - 1 - left, right)
}

var maxDistance = function (colors) {
  const len = colors.length
  let result = 0
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (colors[i] !== colors[j]) {
        result = Math.max(result, j - i)
      }
    }
  }
  return result
}
