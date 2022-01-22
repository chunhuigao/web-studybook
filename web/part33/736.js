/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  // 记录字符最后一次出现的坐标
  const indexList = Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt() - 'a'.charCodeAt()
    indexList[index] = i
  }

  let start = 0
  let end = 0
  const result = []
  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt() - 'a'.charCodeAt()
    end = Math.max(end, indexList[index])
    if (end === i) {
      result.push(end - start + 1)
      start = end + 1
    }
  }
  return result
}
