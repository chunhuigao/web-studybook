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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function (root, startValue, destValue) {
  const parent = lowestCommonAncestor(root, startValue, destValue)

  const dfs = (root, val, path) => {
    if (!root) return false
    if (root.val === val) return true
    let left = dfs(root.left, val, path)
    let right = dfs(root.right, val, path)
    if (left) {
      path.push('L')
    }
    if (right) {
      path.push('R')
    }
    return left || right
  }
  let startPath = []
  dfs(parent, startValue, startPath)
  let destPath = []
  dfs(parent, destValue, destPath)
  return 'U'.repeat(startPath.length) + destPath.reverse().join('')
}

var lowestCommonAncestor = function (root, p, q) {
  if (!root || root.val === p || root.val === q) {
    return root
  }
  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)
  if (!left) return right
  if (!right) return left
  return root
}
