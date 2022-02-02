var subStrHash = function (s, power, modulo, k, hashValue) {
  const p = BigInt(power)
  const m = BigInt(modulo)
  const h = BigInt(hashValue)

  let base = 1n
  for (let i = 0; i < k - 1; i++) {
    base = (base * p) % m
  }

  const len = s.length
  let total = 0n
  let index = len - 1
  for (let i = len - 1; i >= 0; i--) {
    const n = val(s[i])
    total = (total * p + n) % m
    if (i <= len - k) {
      if (total % m === h) {
        index = i
      }
      total = (total - base * val(s[i + k - 1])) % m
      while (total < 0n) {
        total += m
      }
    }
  }
  return s.substr(index, k)

  function val(s) {
    return BigInt(s.charCodeAt() - 'a'.charCodeAt() + 1)
  }
}
var s = 'fbxzaad',
  power = 31,
  modulo = 100,
  k = 3,
  hashValue = 32
var aa = subStrHash(s, power, modulo, k, hashValue)
console.log(aa)
// function subStrHash(
//   s: string,
//   power: number,
//   modulo: number,
//   k: number,
//   hashValue: number
// ): string {
//   const length = s.length
//   const M = BigInt(modulo)
//   const P = BigInt(power)
//   const val = (x: string) => BigInt(x.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
//   let h = 0n,
//     pk = 1n
//   for (let i = 0; i < k - 1; i++) {
//     pk = (pk * P) % M
//   }

//   let first = length

//   for (let i = length - 1; i >= 0; i--) {
//     // 前 k-1 项值复用，开头加上新一项
//     h = (h * P + val(s[i])) % M
//     // 如果长度达到 k
//     if (i <= length - k) {
//       // 满足条件
//       if (h % M === BigInt(hashValue)) {
//         first = i
//       }

//       // 减去最后一项
//       h = (h - pk * val(s[i + k - 1])) % M
//       // 变负为正
//       while (h < 0) {
//         h += M
//       }
//     }
//   }

//   return s.substr(first, k)
// }
