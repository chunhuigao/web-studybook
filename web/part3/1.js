//110. 平衡二叉树 求解

var isBalanced = function (root) {
  let sign = true
  function helper(node) {
    if (node === null) return 0
    let left = helper(node.left)
    let right = helper(node.right)
    if (Math.abs(left - right) > 1) {
      sign = false
    }
    return Math.max(left, right) + 1
  }
  helper(root)
  return sign
}
