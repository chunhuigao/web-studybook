/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const map = {}
  for (let i = 0; i < s.length; i++) {
    const k = s[i]
    map[k] = (map[k] || 0) + 1
  }
  const list = Object.keys(map).map((k) => [k, map[k]])

  list.sort((a, b) => b[1] - a[1])
  let result = ''
  for (let i = 0; i < list.length; i++) {
    const [k, n] = list[i]

    result += Array(n).fill(k).join('')
  }
  return result
}

var ss = 'bbAa'
const aa = frequencySort(ss)
console.log(aa)
