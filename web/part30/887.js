var superEggDrop = function (K, N) {
  // 每一个鸡蛋扔的次数大致相同
  // 对于f层
  // 把鸡蛋放在x层鸡蛋碎了 f层数在x之下，没碎，f在x之上
  const map = new Map()
  return helper(K, N)
  function helper(k, n) {
    const key = n * 100 + k
    if (!map.has(key)) {
      if (k === 1) return n
      if (k === 0 || n === 0) return 0
      if (n === 1) return 1
      let left = 1
      let right = n
      while (left + 1 < right) {
        // 中间值
        const m = (left + right) >> 1
        const low = helper(k - 1, m - 1)
        const high = helper(k, n - m)
        if (low < high) {
          left = m
        } else if (low > high) {
          right = m
        } else {
          left = m
          right = m
        }
      }
      const t1 = Math.max(helper(k - 1, left - 1), helper(k, n - left))
      const t2 = Math.max(helper(k - 1, right - 1), helper(k, n - right))

      map.set(key, Math.min(t1, t2) + 1)
    }
    return map.get(key)
  }
}
