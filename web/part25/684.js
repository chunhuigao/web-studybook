var findRedundantConnection = function (edges) {
  const len = edges.length
  const list = Array(len + 1)
    .fill(0)
    .map((v, i) => i)
  for (let i = 0; i < edges.length; i++) {
    const [j, k] = edges[i]

    if (loop(j) === loop(k)) {
      return edges[i]
    } else {
      merge(j, k)
    }
  }

  function merge(j, k) {
    const x = loop(j)
    const y = loop(k)
    list[x] = y
  }

  function loop(n) {
    if (list[n] === n) return list[n]
    return loop(list[n])
  }
}
