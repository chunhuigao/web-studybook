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
}

var increasingTriplet = function (nums) {
  let n1 = nums[0]
  let n2 = Infinity
  for (let i = 1; i < nums.length; i++) {
    if (n1 >= nums[i]) {
      n1 = nums[i]
    } else if (n2 >= nums[i]) {
      n2 = nums[i]
    } else {
      return true
    }
  }
  return false
}
