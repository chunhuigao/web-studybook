var twoSum = function (nums, target) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    const k = target - n
    if (map[n] === undefined) {
      map[k] = i
    } else {
      return [i, map[n]]
    }
  }
  return []
}
