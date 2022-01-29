var search = function (nums, target) {
  let left = 0

  let right = nums.length - 1
  while (left < right) {
    let mid = left + Math.floor(right - left) / 2
    if (nums[left] < nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid
      } else {
        left = mid + 1
      }
    } else if (nums[left] > nums[mid]) {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid
      }
    } else {
      if (nums[left] == target) return true
      left = left + 1
    }
  }
  return nums[left] == target
}
