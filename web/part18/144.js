var preorderTraversal = function (root) {
  let list = []
  helper(root)
  return list
  function helper(node) {
    if (node === null) return
    list.push(node.val)
    helper(node.left)
    helper(node.right)
  }
}
