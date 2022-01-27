var searchRange = function (nums, target) {
  let l = nums.length
  if (l == 0) return [-1, -1]

  let leftVal = getIndex(true)
  if (leftVal == -1) return [-1, -1]
  let rightVal = getIndex(false)
  return [leftVal, rightVal]

  function getIndex(sign) {
    let left = 0
    let right = l - 1
    let index = -1
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2)

      if (nums[mid] > target) {
        right = mid - 1
      } else if (nums[mid] < target) {
        left = mid + 1
      } else {
        index = mid

        if (sign) {
          right = mid - 1
        } else {
          left = mid + 1
        }
      }
    }

    return index
  }
}
var nums = [5, 7, 7, 8, 8, 10],
  target = 8
const aa = searchRange(nums, target)
console.log(aa)
