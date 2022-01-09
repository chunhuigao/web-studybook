/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
  const len = nums.length
  let one = 0
  for (let i = 0; i < len; i++) {
    if (nums[i] === 1) one++
  }
  let zreo = 0
  for (let i = 0; i < one; i++) {
    if (nums[i] === 0) zreo++
  }
  let min = Infinity
  const list = nums.concat(nums)
  min = Math.min(min, zreo)
  console.log('list', list)
  for (let i = one; i < list.length; i++) {
    if (i === 7) {
      console.log('zreo1', zreo)
      console.log('zreo2', nums[i], nums[i - one])
    }
    if (nums[i] === 0) {
      zreo = zreo + 1
    }
    if (nums[i - one] === 0) {
      zreo = zreo - 1
    }
    // console.log('zreo', i, zreo)
    min = Math.min(min, zreo)
  }
  return min
}
var nums = [0, 1, 0, 1, 1, 0, 0]
const aa = minSwaps(nums)
console.log(aa)
