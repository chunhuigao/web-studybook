var permuteUnique = function (nums) {
  const len = nums.length
  nums.sort((a, b) => a - b)
  const result = []
  const list = Array(len).fill(0)
  dfs([])
  return result
  function dfs(path) {
    if (path.length === len) {
      result.push([...path])
      return
    }

    for (let i = 0; i < len; i++) {
      if (isCheck(i)) {
        path.push(nums[i])
        list[i] = 1
        dfs(path)
        path.pop()
        list[i] = 0
      }
    }
  }

  function isCheck(i) {
    if (list[i] === 1) return false
    if (i > 0 && nums[i] === nums[i - 1] && list[i - 1] === 0) return false
    return true
  }
}
