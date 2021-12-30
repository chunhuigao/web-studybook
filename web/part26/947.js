var removeStones = function (stones) {
  let count = 0
  const map = new Map()
  for (let i = 0; i < stones.length; i++) {
    const [x, y] = stones[i]
    merge(x, y + 10001)
  }
  return stones.length - count

  function merge(x, y) {
    const rootX = find(x)
    const rootY = find(y)
    if (rootX === rootY) return
    map.set(rootX, rootY)
    count--
  }
  function find(n) {
    if (map.get(n) === undefined) {
      count++
      map.set(n, n)
    }
    if (n !== map.get(n)) {
      map.set(n, find(map.get(n)))
    }
    return map.get(n)
  }
}
