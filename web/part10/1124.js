var longestWPI = function (hours) {
  const len = hours.length
  let result = 0
  for (let i = 0; i < len; i++) {
    let n = hours[i] > 8 ? 1 : -1
    result = Math.max(result, n > 0 ? 1 : 0)
    for (let j = i + 1; j < len; j++) {
      n += hours[j] > 8 ? 1 : -1
      if (n > 0) result = Math.max(result, j - i + 1)
    }
  }
  return result
}
