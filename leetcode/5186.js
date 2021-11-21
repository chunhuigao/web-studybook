/**
 * @param {number[]} arr
 */
var RangeFreqQuery = function (arr) {
  this.map = {}
  arr.forEach((n, i) => {
    if (this.map[n] === undefined) {
      this.map[n] = [i]
    } else {
      this.map[n].push(i)
    }
  })
}

/**
 * @param {number} left
 * @param {number} right
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function (left, right, value) {
  const indexList = this.map[value]
  if (indexList && indexList.length) {
    const len = indexList.length
    if (indexList[0] > right) return 0
    if (indexList[len - 1] < left) return 0
    let l = 0
    for (let i = 0; i < len; i++) {
      const idx = indexList[i]
      if (idx >= left) {
        l = i
        break
      }
    }
    let r = len - 1
    for (let i = len - 1; i >= 0; i--) {
      const idx = indexList[i]
      if (idx <= right) {
        r = i
        break
      }
    }
    // console.log('r,l',r,l)
    return Math.max(0, r - l + 1)
  }
  return 0
}
