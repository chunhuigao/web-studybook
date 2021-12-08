/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) return false
  let result = false
  helper(root, 0)
  return result
  function helper(node, num) {
    if (node.left === null && node.right === null) {
      //console.log('num',num)
      if (targetSum === num + node.val) result = true
      return
    }
    node.left && helper(node.left, num + node.val)
    node.right && helper(node.right, num + node.val)
  }
}
