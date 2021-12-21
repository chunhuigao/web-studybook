var maxDepth = function (root) {
  let result = 0
  helper(root, 0)
  return result
  function helper(node, level) {
    if (node === null) {
      result = Math.max(result, level)
      return
    }
    helper(node.left, level + 1)
    helper(node.right, level + 1)
  }
}
