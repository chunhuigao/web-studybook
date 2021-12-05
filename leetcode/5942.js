/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
  let res = []
  let d = {}
  function dp(digits, index, arr) {
    if (arr.slice().length == 3) {
      let m = Number(arr.join(''))
      if (m % 2 || m < 100) {
      } else {
        if (!res.includes(m)) {
          res.push(m)
        }
      }
      return
    }

    for (let i = 0; i < digits.length; i++) {
      if (!d[i]) {
        d[i] = true
        arr.push(digits[i])
        dp(digits, index + 1, arr.slice())
        d[i] = false
        arr.pop()
      }
    }
    return res
  }
  dp(
    digits.sort((a, b) => a - b),
    0,
    []
  )
  return res
}
