var hIndex = function (citations) {
  const len = citations.length
  citations.sort((a, b) => b - a)
  let result = 0
  for (let i = 0; i < len; i++) {
    if (citations[i] > result) {
      result++
    } else {
      break
    }
  }
  return result
}
