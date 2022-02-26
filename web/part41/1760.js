/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
  const max = Math.max(...nums)
  let left = 1
  let right = max
  while (left < right) {
    const mid = left + ((right - left) >> 1)
    if (check(mid)) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return right

  function check(k) {
    let t = 0
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % k === 0) {
        t += nums[i] / k - 1
      } else {
        t += Math.floor(nums[i] / k)
      }
    }
    return t <= maxOperations
  }
}
