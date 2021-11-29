/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false

  const len = s.length
  let t1 = ''
  let t2 = ''
  let as = Array(26).fill(0)
  let gs = Array(26).fill(0)
  let sign = false
  for (let i = 0; i < len; i++) {
    const idx = s[i].charCodeAt() - 'a'.charCodeAt()
    const index = goal[i].charCodeAt() - 'a'.charCodeAt()
    gs[idx] += 1
    as[index] += 1
    if (gs[idx] > 1) sign = true
    if (s[i] !== goal[i]) {
      t1 += s[i]
      t2 += goal[i]
    }

    if (t1.length > 2) return false
  }
  if (as.join(',') !== gs.join(',')) return false
  return (!!t1 && t1[0] === t2[1] && t2[0] === t1[1]) || sign
}
