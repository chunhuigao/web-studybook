//409. 最长回文串
var longestPalindrome = function (s) {
  //获取字符串长度
  const len = s.length
  //哈希表保存字符串
  let map = {}
  for (let i = 0; i < len; i++) {
    const k = s[i]
    map[k] = (map[k] || 0) + 1
  }

  //是否有奇数个数据，偶数数据全部放在result，奇数数据-1放在result中；
  // 最终 result+是否有奇数？+1:+0
  let sign = 0
  let result = 0
  Object.keys(map).forEach((k) => {
    const n = map[k]
    if (n % 2 === 1) {
      result += n - 1
      sign = 1
    } else {
      result += n
    }
  })
  return result + sign
}
