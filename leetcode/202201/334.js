/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  const len = nums.length
  const right = []
  right[len - 1] = nums[len - 1]
  for (let i = len - 2; i >= 0; i--) {
    const c = Math.max(right[i + 1], nums[i])
    right[i] = c
  }
  const left = [nums[0]]
  for (let i = 1; i < len; i++) {
    const c = Math.min(nums[i], left[i - 1])
    left[i] = c
  }
  for (let i = 1; i < len - 1; i++) {
    if (nums[i] > left[i] && nums[i] < right[i]) return true
  }
  return false
  console.log('right', right)
  console.log('right', left)
}
