/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const len = nums.length
  if (len === 1) return 1
  let idx = 1
  const list = []
  list[idx] = nums[0]
  for (let i = 1; i < len; i++) {
    if (list[idx] < nums[i]) {
      idx++
      list[idx] = nums[i]
    } else {
      let left = 1
      let right = idx
      const n = nums[i]
      let pos = 0
      while (left <= right) {
        const m = (left + right) >> 1
        if (list[m] < n) {
          pos = m
          left = m + 1
        } else {
          right = m - 1
        }
      }
      // 替换
      list[pos + 1] = nums[i]
    }
  }
  return idx
}
var nums = [10, 9, 2, 5, 3, 7, 101, 18]
const aa = lengthOfLIS(nums)
