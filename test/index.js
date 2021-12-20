var getLeastNumbers = function (arr, k) {
  // 快速排序方法
  const len = arr.length
  let left = 0
  let right = len - 1
  let idx = partition(arr, left, right)
  // while (idx !== k) {
  //   if (idx < k) {
  //     left = idx + 1
  //   } else {
  //     right = idx - 1
  //   }
  //   idx = partition(arr, left, right)
  // }
  // return arr.slice(0, k)
  console.log('arr', arr)
  function partition(arr, lo, hi) {
    let pivot = arr[lo]
    let index = lo
    for (let i = lo; i <= hi; i++) {
      if (arr[i] < pivot) {
        index++
        ;[arr[i], arr[index]] = [arr[index], arr[i]]
      }
    }
    ;[arr[lo], arr[index]] = [arr[index], arr[lo]]
    return index
  }
}

var arr = [2, 8, 1, 1, 0, 11, -1, 0],
  k = 2
const aa = getLeastNumbers(arr, k)
console.log(aa)
