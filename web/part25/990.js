var equationsPossible = function (equations) {
  const list = Array(26)
    .fill(0)
    .map((v, i) => i)

  for (let i = 0; i < equations.length; i++) {
    const a = equations[i][0]
    const b = equations[i][3]
    const s = equations[i][1]
    if (s === '=') {
      // 相同，合并
      merge(
        a.charCodeAt() - 'a'.charCodeAt(),
        b.charCodeAt() - 'a'.charCodeAt()
      )
    }
  }

  for (let i = 0; i < equations.length; i++) {
    const a = equations[i][0]
    const b = equations[i][3]
    const s = equations[i][1]
    if (s === '!') {
      const x = loop(a.charCodeAt() - 'a'.charCodeAt())
      const y = loop(b.charCodeAt() - 'a'.charCodeAt())
      if (x === y) return false
    }
  }
  return true

  function merge(a, b) {
    const x = loop(a)
    const y = loop(b)
    list[x] = y
  }

  function loop(n) {
    if (n === list[n]) return list[n]
    return loop(list[n])
    // while(n !== list[n]){
    //  list[n] =  list[list[n]]
    //  n = list[n]
    // }
    // return list[n]
  }
}
