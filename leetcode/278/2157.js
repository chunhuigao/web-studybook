var groupStrings = function (words) {
  const map = new Map()
  const node = {}
  const keyMap = {}
  const len = words.length
  const heightMap = {}
  for (let i = 0; i < len; i++) {
    const k = stringToNumber(words[i])
    map.set(k, k)
    keyMap[words[i]] = k
    node[k] = k
    heightMap[k] = 0
  }

  function merge(a, b) {
    const x = find(a)
    const y = find(b)
    if (x === y) return
    if (heightMap[x] == heightMap[y]) {
      heightMap[x] = heightMap[x] + 1 //合并，树的高度加一
      node[y] = x
    } else {
      if (heightMap[x] < heightMap[y]) {
        node[x] = y
      } else {
        node[y] = x
      }
    }
  }

  function find(x) {
    if (x === node[x]) return x
    node[x] = find(node[x])
    return node[x]
  }

  map.forEach((c) => {
    // 这里需要位运算,处理增加，删除
    for (let j = 0; j < 26; j++) {
      const v = 1 << j
      // 需要将26位二进制0变为1，1变为0；
      const sign = c & (1 << j)
      let k = c - (sign !== 0 ? v : -v)

      if (k && map.has(k)) {
        merge(c, map.get(k))
      }
    }

    // 处理修改的，
    for (let j = 0; j < 26; j++) {
      const v = 1 << j
      // 找到1，并把它删除
      const t = c & v
      if (t !== 0) {
        // 找0并赋值为1
        for (let k = 0; k < 26; k++) {
          const t2 = c & (1 << k)
          if (t2 === 0) {
            const key = c + (1 << k) - v
            if (key && map.has(key)) {
              merge(c, map.get(key))
            }
          }
        }
      }
    }
  })

  let rootMap = {}
  let max = 0
  for (let i = 0; i < len; i++) {
    const k = keyMap[words[i]]
    const root = find(node[k])
    rootMap[root] = (rootMap[root] || 0) + 1
    max = Math.max(max, rootMap[root])
  }

  let l = Object.keys(rootMap).length

  return [l, max]

  function stringToNumber(s) {
    let n = 0
    for (let i = 0; i < s.length; i++) {
      const t = s[i].charCodeAt() - 97
      n = n + (1 << t)
    }
    return n
  }
}
