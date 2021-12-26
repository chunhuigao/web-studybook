var isEvenOddTree = function (root) {
  const list = []
  let result = true
  dfs(root, 0)
  //console.log(list)
  return result
  function dfs(node, level) {
    if (node === null) return
    const { val } = node

    if (list[level] === undefined) {
      list[level] = [val]
      if (level % 2 === 0 && val % 2 === 0) result = false
      if (level % 2 === 1 && val % 2 === 1) result = false
    } else {
      const top = list[level].pop()
      if (level % 2 === 1) {
        if (val % 2 === 1) result = false
        if (top <= val) result = false
      } else {
        if (val % 2 === 0) result = false
        if (top >= val) result = false
      }
      list[level].push(val)
      // console.log('list',list)
    }
    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
  }
}
