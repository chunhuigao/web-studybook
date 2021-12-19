var getDescentPeriods = function (prices) {
  const len = prices.length
  const array = Array(len).fill(0)
  let l = 1
  let result = 0
  for (let i = 0; i < len - 1; i++) {
    if (prices[i] - prices[i + 1] === 1) {
      l += 1
    } else {
      //console.log('ll', l)
      result += ((l + 1) * l) / 2

      l = 1
    }
  }
  result += ((l + 1) * l) / 2
  return result
}
