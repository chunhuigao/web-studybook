var getAllElements = function (root1, root2) {
  const list1 = []
  const list2 = []
  helper(root1, list1)
  helper(root2, list2)
  let result = []
  while (list1.length || list2.length) {
    const s1 = list1[0]
    const s2 = list2[0]
    if (s1 !== undefined && s2 !== undefined) {
      if (s1 < s2) {
        result.push(list1.shift())
      } else {
        result.push(list2.shift())
      }
    } else if (s1 === undefined) {
      result.push(list2.shift())
    } else {
      result.push(list1.shift())
    }
  }
  return result
  function helper(node, path) {
    if (node === null) return null
    helper(node.left, path)
    path.push(node.val)
    helper(node.right, path)
  }
}
