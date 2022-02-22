var findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0]
  // 构建图的入度信息
  const map = {}
  const list = Array(n).fill(0)
  edges.forEach((v) => {
    const [a, b] = v
    list[a] += 1
    list[b] += 1
    if (map[a]) {
      map[a].push(b)
    } else {
      map[a] = [b]
    }

    if (map[b]) {
      map[b].push(a)
    } else {
      map[b] = [a]
    }
  })

  // 将入度为0的节点塞入队列
  let stack = []
  for (let i = 0; i < list.length; i++) {
    if (list[i] === 1) stack.push(i)
  }

  // 将入度为1的节点删除
  let result = []
  while (stack.length) {
    result = []
    const len = stack.length
    for (let i = 0; i < len; i++) {
      const idx = stack[i]
      result.push(idx)
      list[idx] -= 1
      const array = map[idx]
      for (let j = 0; j < array.length; j++) {
        list[array[j]] -= 1
        if (list[array[j]] === 1) stack.push(array[j])
      }
    }

    stack = stack.slice(len)
  }
  return result
}
