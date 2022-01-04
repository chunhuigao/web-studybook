const decodeString = (s) => {
  const stack = []
  const string = []
  let num = ''
  let result = ''
  for (let i = 0; i < s.length; i++) {
    const k = s[i]
    if (!isNaN(k)) {
      num += k
    } else if (k === '[') {
      stack.push(num)
      string.push(result)
      num = ''
      result = ''
    } else if (k === ']') {
      const currentNum = stack.pop()
      result = string.pop() + result.repeat(Number(currentNum))
    } else {
      result += k
    }
  }
  return result
}

var s = '3[a2[c]]'
const aa = decodeString(s)
console.log(aa)
