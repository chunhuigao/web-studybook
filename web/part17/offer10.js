var fib = function (n) {
  let result = [0, 1, 1, 2]
  if (n < 2) return result[n]
  for (let i = 3; i <= n; i++) {
    result[i] = (result[i - 1] + result[i - 2]) % (1e9 + 7)
  }
  return result[n]
  console.log(result)
}
