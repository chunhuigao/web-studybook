var superEggDrop = function (K, N) {
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

var superEggDrop = function (K, N) {
  let array = Array(K + 1).fill(0)
  let result = 0
  while (array[K] < N) {
    result++
    for (let i = K; i > 0; i--) {
      array[i] = array[i - 1] + array[i] + 1
    }
  }
  return result
}
