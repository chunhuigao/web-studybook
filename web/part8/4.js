var invertTree = function (root) {
  if (root === null) return null
  let left = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(left)
  return root
}
