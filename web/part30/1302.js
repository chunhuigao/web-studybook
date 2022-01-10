var deepestLeavesSum = function (root) {
  let list = []
  helper(root, 0)
  const array = list.pop()
  return array.reduce((a, b) => a + b)
  function helper(node, level) {
    if (node === null) return
    if (list[level] === undefined) {
      list[level] = [node.val]
    } else {
      list[level].push(node.val)
    }
    helper(node.left, level + 1)
    helper(node.right, level + 1)
  }
}
