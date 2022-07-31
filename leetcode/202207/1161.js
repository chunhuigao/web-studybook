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
var maxLevelSum = function (root) {
  let list = [];
  dfs(root, 0);
  const max = Math.max(...list);
  for (let i = 0; i < list.length; i++) {
    if (list[i] === max) return i + 1;
  }

  function dfs(node, i) {
    if (node === null) return;
    const val = node.val;
    if (list[i]) {
      list[i] += val;
    } else {
      list[i] = val;
    }
    dfs(node.left, i + 1);
    dfs(node.right, i + 1);
  }
};
