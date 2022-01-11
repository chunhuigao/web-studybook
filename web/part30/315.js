var countSmaller = function (nums) {
  const len = nums.length
  let result = Array(len).fill(0)
  const list = nums.map((v, i) => ({ num: v, index: i }))
  mergeSort(list)
  return result
  function mergeSort(nums) {
    //获取数组长度
    const len = nums.length

    //如果数组长度小于2返回数组
    if (len < 2) return nums

    // 否则分割数组
    const mid = len >> 1 //右移1位，类似除以2

    // 递归分解左侧数组
    const left = mergeSort(nums.slice(0, mid))

    // 递归分解右侧数组
    const right = mergeSort(nums.slice(mid, len))

    // 合并左右两个数组
    return merge(left, right)

    // 合并数组
  }
  function merge(left, right) {
    let l = 0
    let r = 0
    let list = []
    while (l < left.length && r < right.length) {
      if (left[l].num <= right[r].num) {
        list.push(left[l])
        result[left[l].index] += right.length - r
        l++
      } else {
        list.push(right[r])

        r++
      }
    }
    // 这两行代码省去了两个判断
    list = list.concat(left.slice(l, left.length))
    list = list.concat(right.slice(r, right.length))
    return list
  }
}

var countSmaller = function (nums) {
  const len = nums.length
  let list = []
  let result = Array(len)
  for (let i = len - 1; i >= 0; i--) {
    let l = 0
    let r = list.length
    while (l < r) {
      const mid = l + Math.floor((r - l) / 2)
      if (list[mid] >= nums[i]) {
        r = mid
      } else {
        l = mid + 1
      }
    }
    result[i] = l
    list.splice(l, 0, nums[i])
  }

  return result
}

var nums = [5, 2, 6, 1]
const aa = countSmaller(nums)
console.log(aa)
