/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  if (root === null) return 0
  let result = 0
  dfs(root)
  function dfs(node) {
    if (node === null) return
    helper(node, 0)
    dfs(node.left)
    dfs(node.right)
  }
  return result
  // 得到数据
  function helper(node, total) {
    if (node === null) return
    if (total + node.val === sum) {
      result++
    }

    helper(node.right, total + node.val)
    helper(node.left, total + node.val)
  }
}
