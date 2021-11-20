/**
 * @param {string[]} words
 * @return {number}
 * 318. 最大单词长度乘积
 */

var maxProduct = function (words) {
  const len = words.length
  let list = Array(len).fill(0)
  for (let i = 0; i < len; i++) {
    const s = words[i]
    for (let j = 0; j < s.length; j++) {
      list[i] |= 1 << (s[j].charCodeAt() - 'a'.charCodeAt())
    }
  }
  //console.log('list',list)
  let result = 0
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if ((list[i] & list[j]) == 0) {
        result = Math.max(result, words[i].length * words[j].length)
      }
    }
  }
  return result
}
