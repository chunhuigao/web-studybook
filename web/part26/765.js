var minSwapsCouples = function (row) {
  const len = row.length
  const list = Array(len / 2)
    .fill(0)
    .map((v, i) => i)
  for (let i = 0; i < len; i += 2) {
    const current = row[i] >> 1
    const next = row[i + 1] >> 1
    merge(current, next)
  }
  let ring = 0
  for (let i = 0; i < len / 2; i++) {
    if (i === find(i)) ring++
  }
  return len / 2 - ring

  function merge(x, y) {
    const rootX = find(x)
    const rootY = find(y)
    list[rootX] = rootY
  }

  function find(n) {
    if (list[n] === n) return list[n]
    const root = find(list[n])
    list[n] = root
    return root
  }
}
