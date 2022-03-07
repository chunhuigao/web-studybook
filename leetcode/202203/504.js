var convertToBase7 = function (num) {
  if (num === 0) return '0'
  let n = num
  if (n < 0) n = -num
  let result = ''
  while (n) {
    result = (n % 7) + result
    n = Math.floor(n / 7)
  }
  return num < 0 ? '-' + result : result
}
