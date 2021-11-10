var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    console.log(left, right)
    const mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] === target) return mid
    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
}
var nums = [-1, 0, 3, 5, 9, 12],
  target = 13
const aa = search(nums, target)
console.log(aa)
