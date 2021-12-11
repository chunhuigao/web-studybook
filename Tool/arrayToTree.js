//通过数组创建二叉树
function createTreeByArray(list) {
  function TreeNode(val) {
    this.val = val
    this.left = null
    this.right = null
  }
  if (list.length === 0) return null
  let tree = new TreeNode(list[0])
  let root = [tree]
  let index = 1;
  for (node of root) {
    root.push((node.left = new TreeNode(list[index])))
    index++
    if (index === list.length) return tree
    root.push((node.right = new TreeNode(list[index])))
    index++
    if (index === list.length) return tree
  }
}

function convertBinaryTree(list) {
  let root

  let insertNode = function (parentNode, childNode) {
    if (!childNode || childNode.val === '') return
    if (childNode.val < parentNode.val) {
      if (parentNode.left === null) {
        parentNode.left = childNode
      } else {
        insertNode(parentNode.left, childNode)
      }
    } else {
      if (parentNode.right === null) {
        parentNode.right = childNode
      } else {
        insertNode(parentNode.right, childNode)
      }
    }
  }
  list.forEach((val) => {
    let node = {
      val,
      left: null,
      right: null,
    }
    if (root) {
      insertNode(root, node)
    } else {
      root = node
    }
  })
  return root
}
module.exports = {
  createTreeByArray,
}

