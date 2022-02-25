/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 == 0 || num2 == 0) return '0'
  if (num1 == 1) return num2
  if (num1 == 1) return num1
  let arr = []
  let n1Arr = num1.split('')
  let per = 0
  while (n1Arr.length) {
    let n = mulNum(num2, Number(n1Arr.pop()))
    let str = n + new Array(per).fill(0).join('')
    per++
    arr.push(str)
  }
  let len = arr.length
  let result = arr[0]

  for (let i = 1; i < len; i++) {
    result = addStr(arr[i], result)
  }
  return result
  function mulNum(s, l) {
    if (l == 0 || s == 0) return '0'
    if (l == 1) return s
    if (s == 1) return l
    let t = s
    for (let i = 1; i < l; i++) {
      t = addStr(s, t)
    }
    return t
  }

  function addStr(s1, s2) {
    if (s1 == 0) return s2
    if (s2 == 0) return s1
    let a1 = s1.split('')
    let a2 = s2.split('')
    let total = ''
    let sign = 0
    while (a1.length || a2.length) {
      let n = Number(a1.pop() || 0) + Number(a2.pop() || 0) + sign
      if (n > 9) {
        n = n % 10
        sign = 1
      } else {
        sign = 0
      }
      total = n + total
    }
    if (sign) {
      total = sign + total
    }
    return total
  }
}
