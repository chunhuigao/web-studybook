var validateStackSequences = function (pushed, popped) {
  const list = []
  const len = pushed.length
  let idx = 0
  for (let i = 0; i < len; i++) {
    list.push(pushed[i])
    while (list.length > 0 && list[list.length - 1] === popped[idx]) {
      idx++
      list.pop()
    }
  }
  return list.length === 0
}
