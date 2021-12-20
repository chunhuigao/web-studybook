var getLeastNumbers = function (arr, k) {
  arr.sort((a, b) => a - b)
  return arr.slice(0, k)
}

var getLeastNumbers = function (arr, k) {
  // 快速排序方法
  const len = arr.length
  let left = 0
  let right = len - 1
  let idx = partition(arr, left, right)
  while (idx !== k) {
    if (idx < k) {
      left = idx + 1
    } else {
      right = idx - 1
    }
    idx = partition(arr, left, right)
  }
  return arr.slice(0, k)
  function partition(arr, start, end) {
    let pivot = arr[start]
    let index = start
    for (let i = start; i <= end; i++) {
      if (arr[i] < pivot) {
        index++
        ;[arr[i], arr[index]] = [arr[index], arr[i]]
      }
    }
    ;[arr[start], arr[index]] = [arr[index], arr[start]]
    return index
  }
}
