var maximumGood = function (statements) {
  let result = 0
  const len = statements.length
  const end = 1 << len
  for (let i = 0; i < end; i++) {
    let sign = true
    for (let j = 0; j < len; j++) {
      const t = i >> j
      if (t & 1) {
        for (let k = 0; k < statements[j].length; k++) {
          if (statements[j][k] === 2) continue
          if (
            (statements[j][k] == 1 && ((i >> k) & 1) == 0) ||
            (statements[j][k] == 0 && ((i >> k) & 1) == 1)
          ) {
            sign = false
            break
          }
        }
      }
    }
    let max = 0
    if (sign) {
      for (let j = 0; j < len; j++) {
        if (i & (1 << j)) max += 1
      }

      result = Math.max(result, max)
    }
  }

  return result
}
