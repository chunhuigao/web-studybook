var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      const t = nums[i] + nums[j]
      if (t === target) return [i, j]
    }
  }
}

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
