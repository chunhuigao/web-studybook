const s = readline()
//console.log('i',s)
const len = s.length
let sign = true
const list = []
for (let i = 0; i < len; i++) {
  const c = s[i]

  if (c === '(' || c === '{' || c === '[') {
    list.push(c)
  } else {
    const l = list.length - 1
    const t = list[l]
    if (
      (c === ')' && t === '(') ||
      (c === ']' && t === '[') ||
      (c === '}' && t === '{')
    ) {
      list.pop()
    } else {
      sign = false
    }
  }
}
console.log(sign && list.length === 0)
