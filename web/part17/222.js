var countNodes = function (root) {
  let result = 0
  helper(root)
  return result
  function helper(node) {
    if (node === null) return
    result++
    helper(node.left)
    helper(node.right)
  }
}
