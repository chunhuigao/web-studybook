var generateTrees = function (n) {
  if (n === 0) return []
  return helper(1, n)
  function helper(start, end) {
    const path = []
    if (start > end) return [null]
    //1、 对任意i
    for (let i = start; i <= end; i++) {
      // 2、 构建i节点左侧树
      const leftChild = helper(start, i - 1)
      // 3、 构建i节点右侧树
      const rightChilde = helper(i + 1, end)
      // 4、 枚举左侧树，具体看7、这里得到的树数组，数组中方的树TreeNode节点
      for (let left of leftChild) {
        // 5、 枚举右侧树，
        for (let right of rightChilde) {
          // 6、 构建i节点，并将左右节点挂载在i节点
          const root = new TreeNode(i)
          root.left = left
          root.right = right
          path.push(root)
        }
      }
    }
    // 7、 返回数组

    return path
  }
}
