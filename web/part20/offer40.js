var getLeastNumbers = function (arr, k) {
  arr.sort((a, b) => a - b)
  return arr.slice(0, k)
}
