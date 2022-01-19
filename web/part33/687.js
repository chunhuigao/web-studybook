var longestUnivaluePath = function (root) {
  let resule = 0
  getVal(root)
  function getVal(node) {
    if (node == null) return 0
    let left = getVal(node.left)
    let right = getVal(node.right)
    let leftMax = 0
    let rightMax = 0
    if (node.left != null && node.left.val == node.val) {
      leftMax += left + 1
    }
    if (node.right != null && node.right.val == node.val) {
      rightMax += right + 1
    }
    resule = Math.max(resule, leftMax + rightMax)
    return Math.max(leftMax, rightMax)
  }
  return resule
}
