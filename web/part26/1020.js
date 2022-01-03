class Union {
  constructor(n) {
    this.list = Array(n)
      .fill(0)
      .map((v, i) => i)
  }
  find(x) {
    if (x === this.list[x]) return x
    const root = this.find(this.list[x])
    this.list[x] = root
    return root
  }
  merge(x, y) {
    const rootX = this.find(x)
    const rootY = this.find(y)
    if (rootX === rootY) return
    this.list[rootX] = rootY
  }
}
var smallestStringWithSwaps = function (s, pairs) {
  // 并查集
  // 并查集内字符串可以任意替换位置
  const len = pairs.length
  const union = new Union(s.length)
  for (let i = 0; i < len; i++) {
    const [x, y] = pairs[i]
    union.merge(x, y)
  }

  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    const root = union.find(i)
    if (map[root]) {
      map[root].indexs.push(i)
      map[root].strings.push(s[i])
    } else {
      map[root] = {
        indexs: [i],
        strings: [s[i]],
      }
    }
  }
  Object.keys(map).forEach((k) => {
    map[k].indexs.sort((a, b) => a - b)
    map[k].strings.sort()
  })
  const result = []
  Object.keys(map).forEach((k) => {
    const indexs = map[k].indexs
    const strings = map[k].strings
    for (let i = 0; i < indexs.length; i++) {
      result[indexs[i]] = strings[i]
    }
  })
  return result.join('')
}

var s = 'dcab',
  pairs = [
    [0, 3],
    [1, 2],
    [0, 2],
  ]
const aa = smallestStringWithSwaps(s, pairs)
console.log(aa)
