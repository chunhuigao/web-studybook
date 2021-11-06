var maxDepth = function (root) {
  let result = 0
  function helper(node, level) {
    if (node === null) {
      result = Math.max(level, result)
      return
    }
    helper(node.left, level + 1)
    helper(node.right, level + 1)
  }
  helper(root, 0)
  return result
}
