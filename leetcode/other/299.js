var getHint = function (secret, guess) {
  const len = secret.length
  let a = 0,
    b = 0
  const list = Array(10).fill(0)
  for (let i = 0; i < len; i++) {
    const s = secret[i]
    list[Number(s)]++
  }
  // console.log(list)
  for (let i = 0; i < len; i++) {
    const s = secret[i]
    const g = guess[i]
    if (s === g) {
      a++
    }
    if (list[Number(g)]) {
      b++
      list[Number(g)]--
    }
  }
  return `${a}A${b - a}B`
}
var secret = '1122',
  guess = '1222'
const aa = getHint(secret, guess)
console.log(aa)
