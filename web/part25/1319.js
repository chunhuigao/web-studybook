var makeConnected = function (n, connections) {
  const list = Array(n)
    .fill(0)
    .map((v, i) => i)
  let line = 0
  // 第一步枚举合并链接的计算机，并计算出多余线
  for (let i = 0; i < connections.length; i++) {
    const [j, k] = connections[i]
    if (loop(j) === loop(k)) {
      line++
    } else {
      marge(j, k)
    }
  }
  let device = 0
  for (let i = 0; i < n; i++) {
    if (list[i] === i) device++
  }
  // console.log('device',device,line)
  return device - 1 <= line ? device - 1 : -1

  function marge(j, k) {
    const x = loop(j)
    const y = loop(k)
    list[x] = y
  }

  function loop(n) {
    if (list[n] === n) return list[n]
    return loop(list[n])
  }
}
