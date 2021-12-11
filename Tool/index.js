const { createTreeByArray } = require('./arrayToTree')

var array = [
  ...[1],
  ...[2, 3],
  ...[4, null, null, 7],
  ...[11, null, null, null, null, null, null, 18],
]

var widthOfBinaryTree = function (root) {
  let result = 0n
  let map = new Map()
  dfs(root, 1, 1n, [])
  return result
  function dfs(node, level, index) {
    // console.log('map', map)
    if (node === null) return
    console.log('index', level, index)
    if (!map.get(level)) {
      map.set(level, index)
    }
    const val = index - (map.get(level) || 0n) + 1n
    if (val > result) result = val
    dfs(node.left, level + 1, index * 2n)
    dfs(node.right, level + 1, index * 2n + 1n)
  }
}
const list = createTreeByArray(array)

const aa = widthOfBinaryTree(list)
console.log(aa)
