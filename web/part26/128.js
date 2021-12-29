var longestConsecutive = function (nums) {
  // 时间复杂度要求o(n)；空间换时间
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = nums[i]
  }
  console.log('map', map[1])
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      const n = find(nums[i])
      result = Math.max(result, n)
    }
  }
  return result
  function find(n) {
    let num = 1
    let left = n - 1
    let right = n + 1
    map[n] = undefined
    while (map[left] !== undefined) {
      map[left] = undefined
      left--
      num++
    }

    while (map[right] !== undefined) {
      map[right] = undefined
      right++
      num++
    }

    return num
  }
}

var longestConsecutive = function (nums) {
  let len = nums.length
  if (len === 0) return 0
  let map = {}
  let max = 0
  for (let i = 0; i < len; i++) {
    const n = nums[i]
    if (map[n] === undefined) {
      let left = map[n - 1] || 0
      let right = map[n + 1] || 0
      let l = left + right + 1
      map[n] = l
      max = Math.max(max, l)
      map[n - left] = l
      map[n + right] = l
    }
    //console.log(map);
  }

  return max
}
