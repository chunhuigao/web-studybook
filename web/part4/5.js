//剑指 Offer II 004. 只出现一次的数字
var singleNumber = function (nums) {
  let result = 0
  for (let i = 0; i < 32; i++) {
    let temp = 0
    for (let j = 0; j < nums.length; j++) {
      const n = nums[j]
      temp = temp + ((n >> i) & 1)
    }
    console.log('temp', temp)
    if (temp % 3 != 0) {
      result |= 1 << i
    }
  }
  return result
}
var nums = [0, 1, 0, 1, 0, 1, 100]
const aa = singleNumber(nums)
