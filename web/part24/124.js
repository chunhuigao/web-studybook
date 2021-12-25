var maxPathSum = function (root) {
  let max = -Infinity
  helper(root)
  return max
  function helper(node) {
    if (node === null) return 0
    const left = Math.max(helper(node.left) || 0)
    const right = Math.max(helper(node.right) || 0)
    max = Math.max(max, left + right + node.val)
    return node.val + left + right
  }
}
