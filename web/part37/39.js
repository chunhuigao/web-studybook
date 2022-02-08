var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b)
  let result = []
  const len = candidates.length
  dfs([], target, 0)
  return result
  function dfs(path, t, idx) {
    if (t === 0) {
      const a = [].concat(path)
      result.push(a)
      return
    }
    for (let i = idx; i < len; i++) {
      console.log('idx', idx, i, t)
      const c = candidates[i]
      path.push(c)
      t - c >= 0 && dfs(path, t - c, i)
      path.pop()
    }
  }
}
var candidates = [2, 3, 6, 7],
  target = 7
const aa = combinationSum(candidates, target)
