const topKFrequent = (nums, k) => {
  const map = {}
  nums.forEach((n) => {
    map[n] = (map[n] || 0) + 1
  })

  // 先统计出现的次数,如果数据量少于k返回

  if (Object.keys(map).length <= k) {
    return Object.keys(map)
  }

  // 数据量超过k呢？

  // 找个桶,桶最长为k;
  const list = []

  //遍历数据
  Object.keys(map).forEach((k) => {
    const idx = map[k]
    list[idx] = (list[idx] || []).concat(k)
  })

  const result = []
  for (let i = list.length - 1; i >= 0; i--) {
    if (result.length === k) return result.map(Number)
    if (list[i]) {
      result.push(...list[i])
    }
  }
  console.log('list', list)
}
var nums = [1, 1, 1, 2, 2, 3],
  k = 2
const ss = topKFrequent(nums, k)
console.log(ss)
