var levelOrderBottom = function (root) {
  if (!root) return []
  const result = []
  helper(root, 0)
  return result.reverse()
  function helper(node, level) {
    if (node === null) return
    if (result[level] === undefined) {
      result[level] = [node.val]
    } else [result[level].push(node.val)]

    helper(node.left, level + 1)
    helper(node.right, level + 1)
  }
}
