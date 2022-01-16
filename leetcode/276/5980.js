var divideString = function (s, k, fill) {
  const len = Math.ceil(s.length / k)

  let result = []
  for (let i = 0; i < len; i++) {
    const str = s.slice(i * k, (i + 1) * k) || ''
    const l = str.length
    if (l === k) {
      result.push(str)
    } else {
      const t = fill.repeat(k - l)

      result.push(str + t)
    }
  }
  return result
}
