var maxSlidingWindow = function (nums, k) {
  const len = nums.length
  const array = []
  const result = []
  for (let i = 0; i < len; i++) {
    // 超出k范围的数字删除
    if (i - array[0] >= k) array.shift()

    let l = array.length
    while (nums[array[l - 1]] <= nums[i]) {
      // 如果当前整数大于数组存的整数，将从array最后一位开始，删除，直到删除到array最后一位的整数 > i位置的整数
      array.pop()
      l = array.length
    }
    array.push(i)
    if (i >= k - 1) {
      result.push(nums[array[0]])
    }
  }
  return result
}
