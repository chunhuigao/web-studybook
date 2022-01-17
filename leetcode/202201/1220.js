var countVowelPermutation = function (n) {
  const MOD = 1000000007
  const list = []
  for (let i = 0; i < n; i++) {
    list[i] = Array(5).fill(0)
  }
  list[0] = Array(5).fill(1)
  for (let i = 1; i < n; i++) {
    list[i][0] = list[i - 1][0]
    list[i][0] = list[i - 1][1]
    list[i][1] = list[i - 1][0] + list[i - 1][2]
    list[i][2] =
      list[i - 1][0] + list[i - 1][1] + list[i - 1][3] + list[i - 1][4]
    list[i][3] = list[i - 1][2] + list[i - 1][4]
    list[i][4] = list[i - 1][0]
    for (let j = 0; j < 5; j++) list[i][j] %= MOD
  }
  let result = 0
  for (let i = 0; i < 5; i++) result += list[n - 1][i]
  return result % MOD
}
