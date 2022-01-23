var rearrangeArray = function (nums) {
  const len = nums.length
  let i = 0
  let j = 0
  let k = 1
  const result = []
  while (i < len) {
    if (nums[i] > 0) {
      result[j] = nums[i]
      j += 2
    } else {
      result[k] = nums[i]
      k += 2
    }
    i++
  }
  return result
}
