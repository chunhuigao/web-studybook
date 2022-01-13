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

/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */

var wordCount = function (startWords, targetWords) {
  const set = new Set()
  const getIndex = (s) => s.charCodeAt() - 'a'.charCodeAt()

  startWords.forEach((word) => {
    let num = 0
    for (let i = 0; i < word.length; i++) {
      num |= 1 << getIndex(word[i])
    }
    set.add(num)
  })
  console.log('set', set)
  // a b d
  // a b c d

  let result = 0

  for (const target of targetWords) {
    let x = 0
    for (let i = 0; i < target.length; i++) {
      x |= 1 << getIndex(target[i])
    }

    for (let i = 0; i < target.length; i++) {
      let t = 1 << getIndex(target[i])
     
      const k = x ^ t
      if (set.has(k)) {
        result++
        break
      }
    }
  }

  return result
}

var startWords = ['ac', 'a'],
  targetWords = ['acd', 'ab', 'a']
const aa = wordCount(startWords, targetWords)
console.log(aa)
