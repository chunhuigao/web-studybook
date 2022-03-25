var superPow = function (a, b) {
  const MOD = BigInt(1337)
  let result = 1
  const len = b.length
  if (a === 1) return 1
  for (let i = 0; i < len; i++) {
    result =
      (helper(BigInt(result), 10) * helper(BigInt(a), Number(b[i]))) % MOD
  }

  function helper(x, n) {
    let t = BigInt(1)
    while (n !== 0) {
      if (n % 2 !== 0) {
        t = (t * BigInt(x)) % MOD
      }
      x = (x * x) % MOD
      n = Math.floor(n / 2)
    }
    return t
  }

  return result
}
