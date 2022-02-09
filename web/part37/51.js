var solveNQueens = function (n) {
  let result = []
  const line = Array(n).fill('.')
  dfs(0, [])

  return result
  function dfs(idx, path) {
    if (idx === n) {
      // 将数据放入
      const array = []
      for (let i = 0; i < n; i++) {
        const k = path[i]
        line[k] = 'Q'
        array.push(line.join(''))
        line[k] = '.'
      }
      result.push(array)
      return
    }
    // idx表示第几层，此处的for循环，为了找到这一层什么地方可以放皇后
    for (let i = 0; i < n; i++) {
      // 这里可以放皇后吗？x
      if (isCheck(path, i)) {
        //可以
        path.push(i)
        dfs(idx + 1, path)
        path.pop()
      }
    }
  }
  function isCheck(select, idx) {
    // select 这是一个数组，数组下标表示层，数组元素表示下标层位置
    const len = select.length
    // len这里表示第几层，因为如果皇后放在这里，这就应该就是select的最后一个元素
    for (let i = 0; i < len; i++) {
      const x = select[i]
      const y = i

      // 皇后与另一位皇后在y坐标上冲突
      if (idx === x) return false
      // 这个皇后与45度斜线上的皇后冲突了
      if (y + x === len + idx) return false
      // 这个皇后与135度斜线上的皇后冲突了
      if (y - x === len - idx) return false

      // 合并上述三个if
      //if (idx === x || x + y === len + idx || y - x === len - idx) return false;
    }
    return true
  }
}
