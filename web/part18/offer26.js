var isSubStructure = function (A, B) {
  if (A === null || B === null) return false
  return helper(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
  function helper(root, node) {
    if (node === null) return true
    if (root === null) return false
    if (node.val !== root.val) return false
    return helper(root.left, node.left) && helper(root.right, node.right)
  }
}
