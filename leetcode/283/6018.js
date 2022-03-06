var createBinaryTree = function (descriptions) {
  const map = {}
  const len = descriptions.length
  let parenti = {}
  for (let i = 0; i < len; i++) {
    const [p, c] = descriptions[i]
    map[p] = new TreeNode(p)
    map[c] = new TreeNode(c)
    parenti[c] = false
    if (parenti[p] === undefined) {
      parenti[p] = true
    }
  }
  let headkey = null
  for (let i = 0; i < len; i++) {
    const [p, c, f] = descriptions[i]
    if (parenti[p]) headkey = p
    if (f) {
      map[p].left = map[c]
    } else {
      map[p].right = map[c]
    }
  }

  return map[headkey]
}
