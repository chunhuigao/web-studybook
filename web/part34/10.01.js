var merge = function (A, m, B, n) {
  const len = A.length
  let i = m - 1
  let j = n - 1
  for (let k = len - 1; k >= 0; k--) {
    if (A[i] > B[j] || B[j] === undefined) {
      A[k] = A[i]
      i--
    } else {
      A[k] = B[j]
      j--
    }
  }
}
