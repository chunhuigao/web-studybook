//递归法判断是否为平衡二叉树

var isBalanced = function (root) {
  let flag = true // 先把所有二叉树先当做平衡二叉树
  let maxHeight = (r) => {
    if (!r) return 0 //当节点不存在时，高度为0
    let left = maxHeight(r.left)
    let right = maxHeight(r.right) //dfs常规操作,求出左右子树高度
    if (Math.abs(left - right) > 1) {
      flag = false //高度差超过1时，非平衡二叉树，直接false
    }
    return Math.max(left, right) + 1 // 这里加1是因为要把父节点高度算进去
  }
  maxHeight(root)
  return flag
}
