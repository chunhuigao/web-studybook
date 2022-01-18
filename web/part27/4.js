var maximumInvitations = function (favorite) {
  // 一条链一个环
  const len = favorite.length
  const max = Math.max(...favorite)
  console.log(max)
  const list = Array(max + 1)
    .fill(0)
    .map((v, i) => i)
  console.log('list', list)
  function merge(i, j) {
    const x = find(i)
    const y = find(j)
    if (x === y) return
    list[x] = y
  }

  function find(n) {
    if (list[n] === n) return n
    const root = find(list[n])
    list[n] = root
    return root
  }

  let result = 0
  for (let i = 0; i <= max; i++) {
    if (find(i) !== find(favorite[i])) {
      merge(i, favorite[i])
    }
  }
  let map = {}
  for (let i = 0; i <= max; i++) {
    const root = find(i)

    if (map[root]) {
      map[root].push(i)
    } else {
      map[root] = [i]
    }
  }
  console.log('array', list)
  console.log('map', map)

  const array = Object.keys(map).map((k) => map[k].length)
  array.sort((a, b) => b - a)
  return array[0]
}
var favorite = [3, 0, 1, 4, 1]
const aa = maximumInvitations(favorite)
console.log(aa)
