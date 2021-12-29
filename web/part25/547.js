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
    //console.log('list', list)
    if (i === j) return
    // 得到i的表头
    const x = loop(i)
    // 得到j的表头
    const y = loop(j)
    list[x] = y
    const array = list.map((v) => v + 1)
    console.log('array', i, j, array)
  }

  function loop(n) {
    if (list[n] !== n) {
      list[n] = loop(list[n])
    }
    return list[n]
  }
}
//1,2
// 3,6,
// 2,3,
//4,5
const isConnected = [
  [1, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 0, 1],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0, 1],
]

const aa = findCircleNum(isConnected)
console.log(aa)
