var sortEvenOdd = function (nums) {
  const len = nums.length
  if (len < 3) return nums
  let left = []
  let right = []
  for (let i = 0; i < len; i++) {
    if (i % 2 === 1) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }
  left.sort((a, b) => b - a)
  right.sort((a, b) => a - b)
  let l = 0
  let r = 0
  for (let i = 0; i < len; i++) {
    if (i % 2 === 1) {
      nums[i] = left[l]
      l++
    } else {
      nums[i] = right[r]
      r++
    }
  }
  return nums
}
