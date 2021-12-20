/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const len = nums.length
  let left = 0
  let right = len - 1
  const target = len - k
  let idx = getIndex(nums, left, right)
  while (idx !== target) {
    if (idx < target) {
      left = idx + 1
    } else {
      right = idx - 1
    }
    idx = getIndex(nums, left, right)
  }
  return nums[idx]

  function getIndex(arr, left, right) {
    console.log('arr', arr)
    const pivot = arr[left]
    let index = left
    for (let i = left; i <= right; i++) {
      if (arr[i] < pivot) {
        index++
        swap(arr, index, i)
      }
    }
    swap(arr, index, left)

    return index
  }

  function swap(arr, l, r) {
    const t = arr[l]
    arr[l] = arr[r]
    arr[r] = t
  }
}
var nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
  k = 4
const aa = findKthLargest(nums, k)
console.log(aa)
