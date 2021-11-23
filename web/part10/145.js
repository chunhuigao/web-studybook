//
var postorderTraversal = function (root) {
  let result = []
  helper(root)
  return result
  function helper(node) {
    if (node === null) return
    helper(node.left)
    helper(node.right)
    result.push(node.val)
  }
}
