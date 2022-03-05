var longestSubarray = function (nums, limit) {
  const len = nums.length
  let index = 0
  let maxs = []
  let mins = []
  let result = 0
  let currentMaxLen = 0
  while (index < len) {
   
    while (maxs.length && nums[maxs[maxs.length - 1]] <= nums[index]) {
      maxs.pop()
    }
    while (mins.length && nums[mins[mins.length - 1]] >= nums[index]) {
      mins.pop()
    }
    maxs.push(index)
    mins.push(index)
    while (Math.abs(nums[maxs[0]] - nums[mins[0]]) > limit) {
      currentMaxLen++
      if (maxs[0] < currentMaxLen) maxs.shift()
      if (mins[0] < currentMaxLen) mins.shift()
    }
    result = Math.max(result, index - currentMaxLen + 1)
    index++
  }
  return result
}

var nums = [8, 2, 4, 7],
  limit = 4
var aa = longestSubarray(nums, limit)
console.log(aa)
