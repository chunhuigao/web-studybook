var lowestCommonAncestor = function (root, p, q) {
  return helper(root)
  function helper(node) {
    if (node === null) return null
    if (node === p || node === q) return node
    const left = helper(node.left)
    const right = helper(node.right)
    if (left && right) return node
    return left ? left : right
  }
}
