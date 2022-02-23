var maxSlidingWindow = function (nums, k) {
  if (k === 1) return nums
  const len = nums.length
  const stack = []
  let result = []
  for (let i = 0; i < len; i++) {
    if (i - stack[0] >= k) stack.shift()
    while (nums[stack[stack.length - 1]] <= nums[i]) {
      stack.pop()
    }
    stack.push(i)

    if (i >= k - 1) {
      result.push(nums[stack[0]])
    }
  }

  return result
}
