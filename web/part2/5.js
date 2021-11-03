const s = readline()
const n = Number(s)
if (n < 0) {
  console.log(false)
} else {
  const len = s.length
  let t = ''
  for (let i = len - 1; i >= 0; i--) {
    t += s[i]
  }
  console.log(t === s)
}
