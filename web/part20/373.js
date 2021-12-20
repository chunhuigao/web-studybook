var kSmallestPairs = function (nums1, nums2, k) {
  const len1 = nums1.length
  const len2 = nums2.length
  const result = []
  const len1Index = Array(len1).fill(0)

  while (result.length < k) {
    let min = null
    let minIndex = null
    let sign = 0
    for (let i = 0; i < len1; i++) {
      const x = nums1[i]
      if (len1Index[i] === len2) sign++
      if (len1Index[i] >= len2) continue
      const y = nums2[len1Index[i]]
      if (min === null) {
        minIndex = i
        min = x + y
      }
      if (x + y < min) {
        minIndex = i
        min = x + y
      }
    }
    if (sign === len1) return result

    result.push([nums1[minIndex], nums2[len1Index[minIndex]]])
    len1Index[minIndex]++
  }
  return result
}
var nums1 = [-10, -4, 0, 0, 6],
  nums2 = [3],
  k = 100
const aa = kSmallestPairs(nums1, nums2, k)
console.log(aa)
//[[-10,3],[-10,5],[-10,6],[-10,7],[-10,8],[-4,3],[-4,5],[-4,6],[0,3],[0,3]]
