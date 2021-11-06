//110. 平衡二叉树 求解

var isBalanced = function (root) {
  let sign = true //假设所有的二叉树都是平衡二叉树
  function helper(node) {
    //递归结束条件，节点为空，递归结束
    if (node === null) return 0

    // 左侧子节点层级
    let left = helper(node.left)

    //右侧子节点层级
    let right = helper(node.right)

    //计算层级差
    if (Math.abs(left - right) > 1) {
      //层级差超过1，非平衡二叉树
      sign = false
    }

    //计算，取当前节点最大层级
    return Math.max(left, right) + 1
  }
  //调用一个递归函数
  helper(root)
  return sign
}
