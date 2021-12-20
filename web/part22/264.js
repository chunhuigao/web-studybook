var nthUglyNumber = function (n) {
  let n2 = 0
  let n3 = 0
  let n5 = 0
  const result = [1]
  while (result.length < n) {
    const min = Math.min(result[n2] * 2, result[n3] * 3, result[n5] * 5)
    if (min === result[n2] * 2) n2++
    if (min === result[n3] * 3) n3++
    if (min === result[n5] * 5) n5++
    result.push(min)
  }
  return result[n - 1]
}
