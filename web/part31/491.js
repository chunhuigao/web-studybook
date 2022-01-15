let index = 0
const findSubsequences = (nums) => {
  const len = nums.length
  const set = new Set()
  for (let i = 0; i < len; i++) {
    helper(i, String(nums[i]))
  }
  console.log('set', index)

  function helper(i, s) {
    index++
    // i是起点，s是字符串
    if (i === len) return
    if (set.has(s)) return
    set.add(s)
    for (let j = i + 1; j < len; j++) {
      if (nums[j] >= nums[i]) helper(j, s + ',' + nums[j])
    }
  }
  const result = []
  set.forEach((s) => {
    const a = s.split(',')

    a.length > 1 && result.push(a.map((v) => Number(v)))
  })
  return result
}

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const aa = findSubsequences(nums)
//console.log(aa)
