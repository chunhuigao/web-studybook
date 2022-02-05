var numSquares = function (n) {
  const list = [0, 1]
  for (let i = 2; i <= n; i++) {
    let min = Infinity
    for (let j = 1; j * j <= i; j++) {
      min = Math.min(min, list[i - j * j] + 1)
    }
    list[i] = min
  }

  return list[n]
}

const aa = numSquares(13)
// 0
// 1 1
// 2 2
// 3 3
// 4,1
