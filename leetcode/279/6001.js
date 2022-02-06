var smallestNumber = function (num) {
  if (num === 0) return num
  let n = num
  let sign = true
  if (n < 0) {
    sign = false
    n = -n
  }
  const s = String(n).split('')
  if (sign) {
    const list = s.sort((a, b) => a - b)
    let index = 0
    while (list[index] === '0') {
      index++
    }
    const a = list.slice(0, index)
    const c = list[index]
    const n = list.slice(index + 1)
    const num = c + a.join('') + n.join('')
    return Number(num)
  } else {
    const list = s.sort((a, b) => b - a)
    return 0 - list.join('')
  }
}
