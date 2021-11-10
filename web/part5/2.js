// api大法好
var sortArray = function (nums) {
  nums.sort((a, b) => a - b)
  return nums
}

// 归并排序
var sortArray = function (nums) {
  //获取数组长度
  const len = nums.length

  //如果数组长度小于2返回数组
  if (len < 2) return nums

  // 否则分割数组
  const mid = len >> 1 //右移1位，类似除以2

  // 递归分解左侧数组
  const left = sortArray(nums.slice(0, mid))

  // 递归分解右侧数组
  const right = sortArray(nums.slice(mid, len))

  // 合并左右两个数组
  return merge(left, right)

  // 合并数组
  function merge(left, right) {
    let l = 0
    let r = 0
    let list = []
    while (l < left.length && r < right.length) {
      if (left[l] < right[r]) {
        list.push(left[l])
        l++
      } else {
        list.push(right[r])
        r++
      }
    }
    list = list.concat(left.slice(l, left.length))
    list = list.concat(right.slice(r, right.length))
    return list
  }
}
