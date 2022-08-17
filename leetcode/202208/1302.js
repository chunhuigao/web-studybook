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
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let list = [];
  let idx = 1;
  dfs(root, 0);

  return list[list.length - 1];
  function dfs(node, level) {
    if (node === null) return;
    if (node.left === null && node.right === null) {
      list[level] = (list[level] || 0) + node.val;
      idx = Math.max(idx, level);
    }
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }
};
