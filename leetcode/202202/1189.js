/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const map = {}
  for (let i = 0; i < text.length; i++) {
    map[text[i]] = (map[text[i]] || 0) + 1
  }
  const s = 'balloon'
  let result = Infinity
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'l' || s[i] === 'o') {
      result = Math.min(result, Math.floor((map[s[i]] || 0) / 2))
    } else {
      result = Math.min(result, map[s[i]] || 0)
    }
  }
  return result
}
