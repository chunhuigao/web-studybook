var levelOrderBottom = function (root) {
  if (!root) return []
  const result = []
  helper(root, 0)
  return result.reverse()
  function helper(node, level) {
    if (node === null) return
    if (result[level] === undefined) {
      result[level] = [node.val]
    } else {
      result[level].push(node.val)
    }

    helper(node.left, level + 1)
    helper(node.right, level + 1)
  }
}

var levelOrderBottom = function (root) {
  if (root === null) return []
  const result = []
  let stack = [root]
  while (stack.length) {
    const path = []
    for (let i = stack.length - 1; i >= 0; i--) {
      let temp = stack.shift()
      path.push(temp.val)
      temp.left && stack.push(temp.left)
      temp.right && stack.push(temp.right)
    }
    result.unshift(path)
  }
  return result
}
