var kthSmallest = function (root, k) {
  let result = null
  function helper(node) {
    if (!node || result !== null) {
      return
    }
    helper(node.left)
    k--
    if (k === 0) {
      result = node.val
    }
    helper(node.right)
  }
  helper(root)
  return result
}


/**
 * js使用number类型表示整数
 * 可以选择使用10进制，二进制，8进制，16进制表示整数
 * 数字使用双精度浮点型表示，
 * 双精度浮点型占64Bit
 * 1 位用来表示符号位
 * 11 位用来表示指数
 * 52 位表示尾数
 * 所以js能精准表示的最大整数是 Math.pow(2， 53）-1 
 */