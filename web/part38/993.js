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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  let xLevel = -1
  let yLevel = -1
  let sign = 1
  dfs(root, 0)
  //console.log('xLevel',xLevel,yLevel)
  if (sign) {
    return xLevel === yLevel
  } else {
    return false
  }
  function dfs(node, level) {
    if (node === null) return
    if (node.val === x) xLevel = level
    if (node.val === y) yLevel = level
    if (
      node &&
      node.left &&
      node.left.val === x &&
      node &&
      node.right &&
      node.right.val === y
    ) {
      sign = 0
      return
    }

    if (
      node &&
      node.left &&
      node.left.val === y &&
      node &&
      node.right &&
      node.right.val === x
    ) {
      sign = 0
      return
    }

    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
  }
}
