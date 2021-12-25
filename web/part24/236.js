var lowestCommonAncestor = function (root, p, q) {
  return helper(root)
  function helper(node) {
    if (node === null) return null
    if (node == p || node == q) return node
    const left = helper(node.left)
    const right = helper(node.right)
    console.log('12121,left', left)
    console.log('12121,right', right)
    if (left && right) return node
    return left ? left : right
  }
}

var root = {
  val: 3,
  left: {
    val: 5,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 1,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: {
      val: 8,
      left: null,
      right: null,
    },
  },
}
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
const p = root.left
const q = root.left.right.right
const aa = lowestCommonAncestor(root, p, q)
console.log('aaaaaa', aa)
