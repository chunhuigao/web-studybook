var findCircleNum = function (isConnected) {
  const len = isConnected.length
  const list = Array(len)
    .fill(0)
    .map((v, i) => i)
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (isConnected[i][j] === 1) {
        marge(i, j)
      }
    }
  }
  let result = 0
  for (let i = 0; i < list.length; i++) {
    if (list[i] === i) result++
  }
  return result
  function marge(i, j) {
    if (i === j) return
    // 得到i的表头
    const x = loop(i)
    // 得到j的表头
    const y = loop(j)
    list[x] = y
  }

  function loop(n) {
    if (list[n] !== n) {
      list[n] = loop(list[n])
    }
    return list[n]
  }
}
