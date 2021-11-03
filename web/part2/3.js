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



const tree = convertBinaryTree(readline().split(','))

// 递归方法
const start = (node) => {
  if (!node) return
  result.push(node.val)
  start(node.left)
  start(node.right)
}
const result = []
start(tree)
console.log(result.join(','))


// 非递归方法
const list = [tree];
let array = []
while(list.length){
  const current = list.pop()
  array.push(current.val);
  current.left && list.push(current.left);
  current.right && list.push(current.right);
}