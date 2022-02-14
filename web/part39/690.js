var GetImportance = function (employees, id) {
  const len = employees.length
  let map = {}
  for (let i = 0; i < len; i++) {
    const { id, importance, subordinates } = employees[i]
    map[id] = [importance, subordinates]
  }
  let result = 0
  dfs(id)
  return result
  function dfs(k) {
    if (map[k] === undefined) return
    const [n, next] = map[k]
    result += n
    for (let i = 0; i < next.length; i++) {
      dfs(next[i])
    }
  }
}
