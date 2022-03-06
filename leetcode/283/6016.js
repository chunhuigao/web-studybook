var cellsInRange = function (s) {
  const [a, b, c, d, e] = s.split('')
  const left = char(a)
  const right = char(d)
  const result = []

  const max = Math.max(Number(b), Number(e))
  const min = Math.min(Number(b), Number(e))
  for (let i = left; i <= right; i++) {
    const z = string(i)
    for (let j = min; j <= max; j++) {
      result.push(z + j)
    }
  }
  return result
  function string(n) {
    return String.fromCharCode(n + 'A'.charCodeAt())
  }
  function char(s) {
    return s.charCodeAt() - 'A'.charCodeAt()
  }
}
