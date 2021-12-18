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
