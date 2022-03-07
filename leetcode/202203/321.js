var maxNumber = function (nums1, nums2, k) {
  let max = null
  for (let i = 0; i <= k; i++) {
    if (k - i > nums2.length) continue
    if (i > nums1.length) continue
    const list1 = helper(nums1, i)
    const list2 = helper(nums2, k - i)
    const current = compose(list1, list2)
    if (max) {
      max = computMaxArray(max, current)
    } else {
      max = current
    }
  }
  return max

  function computMaxArray(ary1, ary2) {
    if (ary1.length === 0) return ary2
    if (ary2.length === 0) return ary1
    if (ary1.length > ary2.length) return ary1
    if (ary1.length < ary2.length) return ary2
    let index = 0
    while (index < ary1.length) {
      if (ary1[index] > ary2[index]) {
        return ary1
      } else if (ary1[index] < ary2[index]) {
        return ary2
      }
      index++
    }
    return ary2
  }
  // 找到数组1和2谁打
  function check(a1, index1, a2, index2) {
    while (index1 < a1.length && index2 < a2.length) {
      const diff = a1[index1] - a2[index2]
      if (diff !== 0) return diff
      index1++
      index2++
    }
    return a1.length - index1 - (a2.length - index2)
  }

  // 合并两个有序数组
  function compose(ary1, ary2) {
    const list = []
    const len1 = ary1.length
    const len2 = ary2.length
    let index1 = 0
    let index2 = 0
    for (let i = 0; i < len1 + len2; i++) {
      if (check(ary1, index1, ary2, index2) > 0) {
        list[i] = ary1[index1++]
      } else {
        list[i] = ary2[index2++]
      }
    }
    return list
  }
  function helper(array, limit) {
    if (limit === 0) return []
    if (limit >= array.length) return array
    const stack = []
    let index = 0
    const len = array.length
    while (index < len) {
      while (
        stack.length &&
        stack[stack.length - 1] < array[index] &&
        stack.length + len - index - 1 >= limit
      ) {
        stack.pop()
      }
      stack.push(array[index++])
    }
    return stack.slice(0, limit)
  }
}
`