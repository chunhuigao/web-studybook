var isBalanced = function (root) {
  if (root === null) return true
  let result = true
  helper(root)
  function helper(node) {
    if (node === null) return 0
    let left = helper(node.left)
    let right = helper(node.right)
    if (Math.abs(left - right) > 1) result = false
    return Math.max(left, right) + 1
  }
  return result
}
