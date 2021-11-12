/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  // 1. 设置哈希映射
  const keyValue = {}

  // 2. 遍历数组统计每个数字出现的次数
  for (let i = 0; i < nums.length; i++) {
    if (!keyValue[nums[i]]) {
      keyValue[nums[i]] = 0
    }
    keyValue[nums[i]]++
  }

  // 3. 如果元素数量小于等于 k，直接返回
  if (Object.keys(keyValue).length <= k) {
    return Object.keys(keyValue)
  }

  // 4. 如果大于 k，利用桶排序
  const bucket = []
  // 4.1 遍历前面存储的哈希映射
  for (let key in keyValue) {
    // 4.2 如果该桶不存在，那就设置为空
    if (!bucket[keyValue[key]]) {
      bucket[keyValue[key]] = []
    }
    // 4.3 往桶里添加，例如出现频率为 2 的，有 4 和 2，那就塞里面
    bucket[keyValue[key]].push(Number(key))
  }

  // 5. 统计结果
  const result = []
  // 5.1 遍历桶，终止条件是 result 的长度小于 k
  for (let i = bucket.length - 1; i >= 0, result.length < k; i--) {
    // 5.1 如果该位置存在桶
    if (bucket[i]) {
      // 5.2 那么将桶里的东西提取出来放入结果
      for (let j = 0; j < bucket[i].length; j++) {
        result.push(bucket[i][j])
      }
    }
  }

  // 6. 返回结果
  return result
}
