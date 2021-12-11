function widthOfBinaryTree(root: TreeNode | null): bigint {
  let max = 1n,
    map = new Map()
  const dfs = (node: TreeNode, level: number, pos: bigint): bigint => {
    if (!map.has(level)) {
      map.set(level, pos)
    } else {
      const val = pos - (map.get(level) || 0n) + 1n
      if (val > max) max = val
    }
    node.left && dfs(node.left, level + 1, pos * 2n)
    node.right && dfs(node.right, level + 1, pos * 2n + 1n)
    return max
  }
  return root ? dfs(root, 1, 1n) : 0n
}
