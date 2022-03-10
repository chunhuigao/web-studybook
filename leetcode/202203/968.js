var minCameraCover = function (root) {
  return dfs(root)[1]
  function dfs(node) {
    if (node === null) return [Infinity, 0, 0]

    const [la, lb, lc] = dfs(node.left)
    const [ra, rb, rc] = dfs(node.right)

    // a表示根节点放监控，所有节点可以被监控的最小值
    const a = lc + rc + 1
    // b表示 所有节点都可以被监控
    const b = Math.min(a, ra + lb, la + rb)

    // c表示覆盖所有子节点监控
    const c = Math.min(a, lb + rb)

    return [a, b, c]
  }
}
