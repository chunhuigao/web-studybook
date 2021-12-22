var isValidBST = function (root) {
  if (root === null) return true
  let max = -Infinity
  return helper(root)
  function helper(node) {
    if (node === null) return true
    if (helper(node.left)) {
      if (max < node.val) {
        max = node.val
        return helper(node.right)
      }
    }
    return false
  }
}
