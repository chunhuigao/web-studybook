var maxScoreIndices = function (nums) {
  let one = 0
  const len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] === 1) one++
  }
  let map = {}
  let max = one
  map[one] = [0]
  let zero = 0
  for (let i = 1; i <= len; i++) {
    if (nums[i - 1] === 0) zero++
    if (nums[i - 1] === 1) one--
    const k = zero + one

    max = Math.max(max, k)
    if (map[k] === undefined) {
      map[k] = [i]
    } else {
      map[k].push(i)
    }
  }
  return map[max]
}
var nums = [1, 1]
var aa = maxScoreIndices(nums)
console.log('kkk', aa)
