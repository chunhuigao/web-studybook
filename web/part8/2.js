var maxProfit = function (prices) {
  const len = prices.length
  if (len === 1) return 0
  let min = prices[0]
  let result = 0
  for (let i = 1; i < len; i++) {
    if (prices[i] > min) {
      result = Math.max(result, prices[i] - min)
    } else {
      min = prices[i]
    }
  }
  return result
}
