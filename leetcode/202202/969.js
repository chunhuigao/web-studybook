/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
  const len = arr.length
  let result = []
  for (let i = len - 1; i >= 0; i--) {
    let idx = 0
    let max = arr[0]
    for (let j = 0; j <= i; j++) {
      if (arr[j] > max) {
        max = arr[j]
        idx = j
      }
    }
    console.log('arr', arr)
    reverse(0, idx)
    reverse(0, i)
    result.push(idx, i)
  }

  return result

  function reverse(left, right) {
    while (left < right) {
      const t = arr[left]
      arr[left] = arr[right]
      arr[right] = t
      left++
      right--
    }
  }
}

var arr = [3, 2, 4, 1]
var aa = pancakeSort(arr)
console.log(aa)
