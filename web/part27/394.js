var decodeString = function (s) {
  const len = s.length
  const stack = []
  let string = ''
  let num = ''
  for (let i = 0; i < len; i++) {
    if (s[i] >= 0 && s[i] <= 9) {
      num += s[i]
    } else if (s[i] === '[') {
      stack.push(string, num)
      num = ''
      string = ''
    } else if (s[i] === ']') {
      const pop1 = stack.pop()
      const pop2 = stack.pop()
      console.log('pop', pop1, string)
    } else {
      string += s[i]
    }
  }
}
var s = '3[a]2[bc]fg'
const aa = decodeString(s)
