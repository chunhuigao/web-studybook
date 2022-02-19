var isCousins = function (root, x, y) {
  return dfs(root, 0) === -1
  function dfs(node, level) {
    if (!node) return 0
    if (node.val == x || node.val == y) return depth
    const l = dfs(node.left, x, y, depth + 1)
    const r = dfs(node.right, x, y, depth + 1)
    if (l < 0) return l
    if (r < 0) return r
    if (l > 0 && r > 0) {
      if (l == r && l != depth + 1) return -1
      else return -2
    }
    if (l > 0) return l
    if (r > 0) return r
    return 0
  }
}
