var decodeString = function (s) {
  let reg = /(\d+)\[([a-zA-Z]+)\]/g
  while (s.indexOf('[') > 0) {
    s = s.replace(reg, (_, ...[num, str]) => {
      console.log(num, str)
      let result = ''
      for (let i = 0; i < num - 0; i++) {
        result += str
      }
      return result
    })
  }
  return s
}
var s = '3[a2[c]]'
const aa = decodeString(s)
