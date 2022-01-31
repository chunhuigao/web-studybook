/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    let t = nums1
    nums1 = nums2
    nums2 = t
  }

  const len1 = nums1.length
  const len2 = nums2.length

  const target = (len1 + len2 + 1) >> 1

  let left = 0
  let right = len1

  while (left < right) {
    const m = left + ((right - left + 1) >> 1)
    const j = target - m

    if (nums1[m - 1] > nums2[j]) {
      right = m - 1
    } else {
      left = m
    }
  }

  let m = left
  let n = target - m
  console.log('n,m', m, n)
  let n1Max = m === 0 ? -Infinity : nums1[m - 1]
  let n1Min = m === len1 ? Infinity : nums1[m]

  let n2Max = n === 0 ? -Infinity : nums2[n - 1]
  let n2Min = n === len2 ? Infinity : nums2[n]
  console.log('1111', n1Max, n2Max, n1Min, n2Min)
  if ((len2 + len1) % 2 === 1) {
    return Math.max(n1Max, n2Max)
  } else {
    const max = Math.max(n1Max, n2Max)
    const min = Math.min(n1Min, n2Min)
    return (max + min) / 2
  }
}

var nums1 = [0, 0, 0, 0, 0],
  nums2 = [-1, 0, 0, 0, 0, 0, 1]
const aa = findMedianSortedArrays(nums1, nums2)
console.log(aa)
