/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    if (nums[left] % 2 === 0 && nums[right] % 2 !== 0) {
      ;[nums[left], nums[right]] = [nums[right], nums[left]]
      left++
      right--
    } else if (nums[left] % 2 === 0) {
      right--
    } else {
      left++
    }
  }
  return nums
}
