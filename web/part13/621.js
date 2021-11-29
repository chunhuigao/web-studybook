/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const len = tasks.length
  if (n === 0) return len
  let list = Array(26).fill(0)
  for (let i = 0; i < len; i++) {
    const idx = tasks[i].charCodeAt() - 'A'.charCodeAt()
    list[idx] += 1
  }

  list = list.filter((v) => v > 0)
  let result = 0
  while (list.length) {
    const l = list.length
    if (l < n) {
      list = list.map((v) => v - 1)
    } else {
      list = list.map((v, i) => (i <= n ? v - 1 : v))
      list.sort((a, b) => b - a)
    }

    list = list.filter((v) => v > 0)
    if (list.length === 0) {
      return result + l
    }
    result += n + 1
  }
  return result
}
