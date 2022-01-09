var checkValid = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const list = Array(n)
    .fill(0)
    .map((v, i) => i + 1)
  const s = list.join(',')
  if (m !== n) return false
  for (let i = 0; i < m; i++) {
    let temp = []
    for (let j = 0; j < n; j++) {
      temp.push(matrix[i][j])
    }
    temp.sort((a, b) => a - b)
    if (temp.join(',') !== s) return false
  }
  for (let i = 0; i < n; i++) {
    let temp = []
    for (let j = 0; j < m; j++) {
      temp.push(matrix[j][i])
    }
    temp.sort((a, b) => a - b)
    if (temp.join(',') !== s) return false
  }

  return true
}
