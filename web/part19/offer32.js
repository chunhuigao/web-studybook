/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = []
  helper(root, 0)
  return result
  function helper(node, level) {
    if (node === null) return
    if (result[level] === undefined) {
      result[level] = [node.val]
    } else [result[level].push(node.val)]

    helper(node.left, level + 1)
    helper(node.right, level + 1)
  }
}
