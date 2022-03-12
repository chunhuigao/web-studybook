var postorder = function (root) {
  if (!root) return []
  let result = []

  getVal(root, result)

  return result
  function getVal(node, arr) {
    if (!node) return null

    node.children.map((item) => {
      getVal(item, arr)
    })
    arr.push(node.val)
  }
}
