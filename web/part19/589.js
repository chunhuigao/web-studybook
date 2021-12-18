var preorder = function (root) {
  let result = []
  helper(root)
  return result
  function helper(node) {
    if (!node) return
    result.push(node.val)
    const len = (node.children || []).length
    for (let i = 0; i < len; i++) {
      helper(node.children[i])
    }
  }
}

var preorder = function (root) {
  if (root === null) return []
  let result = []
  let stack = [root]
  while (stack.length) {
    const node = stack.pop()
    result.push(node.val)
    const len = (node.children || []).length
    for (let i = len - 1; i >= 0; i--) {
      stack.push(node.children[i])
    }
  }
  return result
}
