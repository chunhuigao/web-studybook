/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
const kMirror = function (k, n) {
  let ans = 0
  let cnt = 0
  const isMirror = (s) => s === s.split('').reverse().join('')

  // 枚举长度
  for (let len = 1; cnt < n; len++) {
    dfs([], len)
  }

  function dfs(cur, len) {
    if (cnt >= n) return
    const h = Math.floor((len + 1) / 2)
    if (cur.length === h) {
      const tmp = cur.slice()
      for (let i = h; i < len; i++) {
        tmp[i] = tmp[len - 1 - i]
      }
      const num = Number(tmp.join(''))
      const s = num.toString(k)
      if (isMirror(s)) {
        cnt++
        ans += num
      }
      return
    }
    console.assert(cur.length !== h)
    for (let i = 0; i <= 9; i++) {
      if (!cur.length && i === 0) continue
      cur.push(i)
      dfs(cur, len)
      cur.pop()
    }
    console.log('cur', cur)
  }

  return ans
}

kMirror(3, 7)
