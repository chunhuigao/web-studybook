var topKFrequent = function (words, k) {
  const map = {}
  words.forEach((v) => {
    map[v] = (map[v] || 0) + 1
  })

  const list = []
  Object.keys(map).forEach((k) => {
    list.push([map[k], k])
  })

  list.sort((a, b) => {
    if (b[0] === a[0]) {
      return b[1] < a[1] === true ? 1 : -1
    } else {
      return b[0] - a[0]
    }
  })

  return list.slice(0, k).map((v) => v[1])
}
var n = ['i', 'love', 'leetcode', 'i', 'love', 'coding'],
  k = 3
const aa = topKFrequent(n, k)
console.log(aa)
