var numSquares = function (n) {
  let temp = n
  while (temp % 4 === 0) {
    temp = Math.floor(temp / 4)
  }
  if (temp % 8 === 7) return 4
  const s = Math.sqrt(n, 2)
  if (s % 1 === 0) return 1
  let index = 0
  while (index * index < n) {
    const a = index * index
    const bb = n - a
    b = Math.sqrt(bb, 2)
    if (b % 1 === 0) return 2
    index++
  }
  return 3
}
