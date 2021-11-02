const s = '{(}'
const len = s.length
let sign = true
const arr = []

for (let i = 0; i < len; i++) {
  if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
    arr.push(s[i])
  }
  if (s[i] === ')') {
    const x = arr.pop()
    if (x !== '(') console.log(false)
  }
  if (s[i] === ']') {
    const x = arr.pop()
    if (x !== '[') console.log(false)
  }
  if (s[i] === '}') {
    const x = arr.pop()
    if (x !== '{') console.log(false)
  }
}

console.log(arr.length === 0)
