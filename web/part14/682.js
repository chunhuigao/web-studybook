var calPoints = function (ops) {
  const len = ops.length
  const list = []
  for (let i = 0; i < len; i++) {
    if (ops[i] === 'C') {
      list.pop()
    } else if (ops[i] === 'D') {
      const l = list.length
      list.push(list[l - 1] * 2)
    } else if (ops[i] === '+') {
      const l = list.length
      list.push(list[l - 1] + list[l - 2])
    } else {
      list.push(Number(ops[i]))
    }
  }
  //console.log('list',list)
  return list.reduce((a, b) => a + b)
}
