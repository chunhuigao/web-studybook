var shipWithinDays = function (weights, D) {
  const len = weights.length
  let max = 0
  let sum = 0
  for (let i = 0; i < len; i++) {
    sum += weights[i]
    max = Math.max(max, weights[i])
  }
  let left = Math.max(max, Math.ceil(sum / D))
  let right = sum
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    if (helper(mid, D)) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
  function helper(targe, day) {
    let num = 0
    for (let i = 0; i < len; i++) {
      if (num + weights[i] > targe) {
        num = 0
        day--
      }
      num += weights[i]
    }
    return day > 0
  }
}
