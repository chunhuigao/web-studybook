/*
 * @Author: mikey.zhaopeng
 * @Date: 2022-04-07 22:21:34
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-04-07 22:22:04
 * 中序遍历，二叉搜索树中序遍历数组单调递增
 */

var isValidBST = function (root) {
  let max = -Infinity;
  return dfs(root);
  function dfs(node) {
    if (node === null) return true;
    if (dfs(node.left)) {
      if (max < node.val) {
        max = node.val;
        return dfs(node.right);
      }
    }
    return false;
  }
};
