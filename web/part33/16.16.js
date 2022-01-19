var subSort = function (array) {
  const len = array.length
  if (len < 2) return [-1, -1]
  let left = []
  left[0] = array[0]
  for (let i = 1; i < len; i++) {
    left[i] = Math.max(left[i - 1], array[i])
  }

  let right = []
  right[len - 1] = array[len - 1]
  for (let i = len - 2; i >= 0; i--) {
    right[i] = Math.min(array[i], right[i + 1])
  }
  console.log(left)
  console.log(right)
  let l = 0
  for (let i = 0; i < len; i++) {
    if (left[i] !== right[i]) {
      l = i
      break
    }
  }
  let r = len - 1
  for (let i = len - 1; i >= 0; i--) {
    if (left[i] !== right[i]) {
      r = i
      break
    }
  }

  if (l === 0 && r === len - 1) return [-1, -1]
  return [l, r]
}

var nums = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]

const aa = subSort(nums)
var a = [1, 2, 4, 6, 6, 6, 6, 6, 6, 7, 16, 18, 19]
