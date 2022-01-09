var wordCount = function (startWords, targetWords) {
  let map = {}
  startWords.forEach((k) => {
    const list = k.split('')
    for (let i = 0; i < 26; i++) {
      const s = String.fromCharCode(97 + i)
      if (!list.includes(s)) {
        const t = list.concat([s])
        const k = t.sort().join('')
        map[k] = 1
      }
    }
  })
  let result = 0
  targetWords.forEach((v) => {
    const s = v.split('').sort().join('')
    if (map[s] > 0) result++
  })
  return result
}
var startWords = ['uh'],
  targetWords = ['uhr', 'u', 'r']
const aa = wordCount(startWords, targetWords)
console.log(aa)
