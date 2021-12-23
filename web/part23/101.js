var isSymmetric = function (root) {
  if (!root) return true
  return loop(root.left, root.right)
  function loop(left, right) {
    if ((left == null && right != null) || (left != null && right == null)) {
      return false
    }
    if (left != null && right != null) {
      if (right.val != left.val) {
        return false
      }
      return (
        right.val == left.val &&
        loop(left.left, right.right) &&
        loop(right.left, left.right)
      )
    }
    return true
  }
}
