var rightSideView = function (root) {
  let level = -1
  let result = []
  helper(root, 0)
  return result
  function helper(node, num) {
    if (node === null) return
    if (num > level) {
      level = num
      result.push(node.val)
    }
    helper(node.right, num + 1)
    helper(node.left, num + 1)
  }
}
