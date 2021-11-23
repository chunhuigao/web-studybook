// var isValidSerialization = function (preorder) {
//   const array = preorder.split(',')
//   const len = array.length
//   const stack = []
//   for (let i = 0; i < len; i++) {
//     stack.push(array[i])
//     const sLen = stack.length - 1
//     while (
//       stack.length >= 3 &&
//       stack[sLen] === stack[sLen - 1] &&
//       stack[sLen] === '#' &&
//       stack[sLen - 2] !== '#'
//     ) {
//       stack.pop()
//       stack.pop()
//       stack.pop()
//       stack.push('#')
//     }
//   }
//   return stack.length === 1 && stack.pop() === '#'
// }

var isValidSerialization = function (preorder) {
  const array = preorder.split(',')
  const len = array.length
  let diff = 1
  for (let i = 0; i < len; i++) {
    diff -= 1
    if (diff < 0) return false
    if (array[i] !== '#') {
      diff += 2
    }
  }
  return diff === 0
}
