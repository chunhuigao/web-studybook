/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
  let n = arr.length
  if (n === 0) return []
  let nums = [...arr],
    ans = []
  nums.sort((a, b) => a - b)
  for (let i = n - 1, j = 0; i > -1; i--, j++) {
    let index = arr.indexOf(nums[i])
    ans.push(index + 1, n - j)
    reserve(arr, index + 1)
    reserve(arr, n - j)
  }
  return ans

  function reserve(nums, k) {
    let l = 0,
      r = k - 1
    while (l < r) {
      let temp = nums[l]
      nums[l] = nums[r]
      nums[r] = temp
      l++
      r--
    }
  }
}
