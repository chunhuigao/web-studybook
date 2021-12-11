var widthOfBinaryTree = function (root) {
  let result = 0n
  let map = new Map()
  dfs(root, 1, 1n, [])
  return result
  function dfs(node, level, index) {
    if (node === null) return
    if (!map.get(level)) {
      map.set(level, index)
    }
    const val = index - (map.get(level) || 0n) + 1n
    if (val > result) result = val
    dfs(node.left, level + 1, index * 2n)
    dfs(node.right, level + 1, index * 2n + 1n)
  }
}
