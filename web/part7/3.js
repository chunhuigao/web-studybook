//递归求解
var diameterOfBinaryTree = function (root) {
  let result = 0
  helper(root)
  return result - 1
  function helper(node) {
    if (node === null) return 0

    const left = helper(node.left)
    const right = helper(node.right)
    //当前节点左侧+右侧最深节点
    result = Math.max(result, left + right + 1)
    // 左侧和右侧深度最大值
    return Math.max(left, right) + 1
  }
}
