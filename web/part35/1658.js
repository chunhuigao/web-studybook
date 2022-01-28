var minOperations = function (nums, x) {
  const len = nums.length
  const total = nums.reduce((a, b) => a + b)
  console.log('total', total)
  if (total < x) return -1
  if (total === x) return len

  const target = total - x
  let current = 0
  let max = 0
  let result = 0
  for (let i = 0; i < len; i++) {
    max += 1
    current += nums[i]
    while (current > target) {
      current -= nums[i + 1 - max]
      max -= 1
    }
    if (current === target) {
      result = Math.max(result, max)
    }
  }
  return result === 0 ? -1 : len - result
}

var nums = [3, 2, 20, 1, 1, 3],
  x = 10
const aa = minOperations(nums, x)
console.log(aa)
