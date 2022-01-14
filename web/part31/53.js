var maxSubArray = function (nums) {
  const len = nums.length
  let total = nums[0]
  let result = nums[0]
  for (let i = 0; i < len; i++) {
    if (total + nums[i] >= nums[i]) {
      total += nums[i]
    } else {
      total = nums[i]
    }
    result = Math.max(result, total)
  }
  return result
}
