var maxDepth = function (root) {
  let result = 0
  function helper(node, level) {
    // 递归结束条件
    if (node === null) {
      //递归结束，找到当前节点所在层级与最大层级较大值保存
      result = Math.max(level, result)
      return
    }

    // 左侧层级
    helper(node.left, level + 1)

    //右侧层级
    helper(node.right, level + 1)
  }

  // 递归
  helper(root, 0)
  return result
}
