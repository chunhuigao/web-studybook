//746. 使用最小花费爬楼梯
var minCostClimbingStairs = function (cost) {
  const len = cost.length
  if (len === 2) return Math.min(...cost)
  //前两步花费为0；
  const stepCost = [0, 0]
  for (let i = 2; i <= len; i++) {
    //下一步的费用,上一步费用与上上一步费用较小值
    stepCost[i] = Math.min(
      cost[i - 1] + stepCost[i - 1],
      cost[i - 2] + stepCost[i - 2]
    )
  }
  return stepCost[len]
}
