/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
  const len = costs.length
  const dp = Array(len + 1)
  // dp[i] = [red,bule,green]
  dp[0] = costs[0]

  for (let i = 1; i < len; i++) {
    const d = dp[i - 1]
    let list = [0, 0, 0]
    for (let j = 0; j < 3; j++) {
      const start = dp[i - 1][j]
      let min = Infinity
      for (let k = 0; k < 3; k++) {
        console.log('start + costs[i][k]111', dp[0][j], costs[i][k])
        if (j !== k) min = Math.min(start + costs[i][k], min)
      }
      list[j] = min
    }
    dp[i] = list
  }
  console.log('dp', dp)
  return Math.min(...dp[len - 1])
}
var costs = [
  [17, 2, 17],
  [16, 16, 5],
  [14, 3, 19],
]
var aa = minCost(costs)
