var nthSuperUglyNumber = function (n, primes) {
  const len = primes.length
  const list = Array(len).fill(0)
  const result = [1]
  while (result.length < n) {
    let min = Infinity
    for (let i = 0; i < len; i++) {
      const t = list[i]
      min = Math.min(min, result[t] * primes[i])
    }
    for (let i = 0; i < len; i++) {
      const t = list[i]
      if (min === result[t] * primes[i]) list[i]++
    }
    result.push(min)
  }

  return result[n - 1]
}
var n = 12,
  primes = [2, 7, 13, 19]
const aa = nthSuperUglyNumber(n, primes)
console.log(aa)
