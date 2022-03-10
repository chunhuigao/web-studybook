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
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function (root, n, x) {
  const current = findNode(root, x)
  const leftNodeNum = getNodeNum(current.left)
  const rightNodeNum = getNodeNum(current.right)
  const hlaf = n / 2
  const diff = n - leftNodeNum - rightNodeNum - 1
  if (leftNodeNum > hlaf || rightNodeNum > hlaf || diff > hlaf) return true
  return false

  function findNode(node, x) {
    if (node === null) return null
    if (node.val === x) return node
    const left = findNode(node.left, x)
    const right = findNode(node.right, x)
    return left !== null ? left : right
  }

  function getNodeNum(node) {
    if (node === null) return 0
    return getNodeNum(node.left) + getNodeNum(node.right) + 1
  }
}
