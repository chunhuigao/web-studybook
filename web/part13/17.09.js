var getKthMagicNumber = function (k) {
  let n3 = 0
  let n5 = 0
  let n7 = 0
  const list = []
  list[0] = 1
  for (let i = 1; i < k; i++) {
    list[i] = Math.min(3 * list[n3], 5 * list[n5], 7 * list[n7])
    if (list[i] === 3 * list[n3]) n3++
    if (list[i] === 5 * list[n5]) n5++
    if (list[i] === 7 * list[n7]) n7++
  }
  return list[k - 1]
}
