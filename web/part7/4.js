//242. 有效的字母异位词
var isAnagram = function (s, t) {
  //声明空数组，保存s的字符串数据
  const array = Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    const n = s[i].charCodeAt() - 97
    array[n] += 1
  }

  //s声明空数组2保存t数组数据
  const array1 = Array(26).fill(0)
  for (let i = 0; i < t.length; i++) {
    const n = t[i].charCodeAt() - 97
    array1[n] += 1
  }

  //数组转换为字符串相同，即可得到答案
  return array.join(',') === array1.join(',')
}
