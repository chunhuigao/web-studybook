var findLHS = function (nums) {
  const map = {}
  nums.forEach((n) => {
    map[n] = (map[n] || 0) + 1
  })
  let result = 0
  Object.keys(map).forEach((k) => {
    k = Number(k)
    const c = map[k]
    const after = c && map[k - 1] ? c + map[k - 1] : 0
    const next = c && map[k + 1] ? c + map[k + 1] : 0
    result = Math.max(result, after, next)
  })
  return result
}
