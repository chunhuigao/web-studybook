var searchMatrix = function (matrix, target) {
  let m = matrix.length
  if (m == 0) return false
  let n = matrix[0].length
  let row = 0
  let col = n - 1
  while (row < m && col >= 0) {
    if (matrix[row][col] == target) return true
    if (matrix[row][col] > target) {
      col--
    } else {
      row++
    }
  }
  return false
}
