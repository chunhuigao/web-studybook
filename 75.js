;`给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
`

var sortColors = function (nums) {
  const len = nums.length
  //左侧指针
  let left = 0
  //右侧指针
  let right = len - 1
  // 当前指针
  let k = 0
  while (k <= right) {
    //如果当前指针指向0；将0与右侧指针数据交换，并把left指针向右移动一位
    if (nums[k] === 0) {
      const t = nums[k]
      nums[k] = nums[left]
      nums[left] = t
      left++
      k++
    } else if (nums[k] === 1) {
      k++
    } else if (nums[k] === 2) {
      // 如果当前指针位2，将当前值与right进行交换，right向左移动一位
      const t = nums[k]
      nums[k] = nums[right]
      nums[right] = t
      right--
    }
  }
  return nums
}
