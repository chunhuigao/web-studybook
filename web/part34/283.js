var moveZeroes = function (nums) {
  const len = nums.length
  let left = 0
  let start = 0
  while (start < len) {
    if (nums[start]) {
      const t = nums[start]
      nums[start] = nums[left]
      nums[left] = t
      left++
    }
    start++
  }
  return nums
}
