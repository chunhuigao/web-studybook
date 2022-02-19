var findClosestElements = function (arr, k, x) {
  const len = arr.length
  let left = 0
  let right = len - k
  while (left < right) {
    const mid = left + ((right - left) >> 1)
    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return arr.slice(left, left + k)
}

var arr = [1, 1, 1, 10, 10, 10],
  k = 1,
  x = 9
var aa = findClosestElements(arr, k, x)
