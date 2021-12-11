var kthLargest = function (root, k) {
  let list = []
  helper(root, k)
  return list[0]
  function helper(node) {
    if (list.length > k) list.shift()
    if (node === null) return 0
    helper(node.left)
    list.push(node.val)
    helper(node.right)
  }
}
