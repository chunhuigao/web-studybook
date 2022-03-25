/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function (arr, difference) {
  const map = new Map()
  let ans = 1
  for (const num of arr) {
    if (map.has(num - difference)) {
      const v = map.get(num - difference) + 1
      map.set(num, v)
      ans = Math.max(ans, v)
    } else map.set(num, 1)
  }
  return ans
}
