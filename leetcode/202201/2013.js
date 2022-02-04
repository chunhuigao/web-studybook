var DetectSquares = function () {
  this.cnts = new Map()
}

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {
  if (this.cnts.has(point[1])) {
    const m = this.cnts.get(point[1])
    m.set(point[0], (m.get(point[0]) || 0) + 1)
  } else {
    const m = new Map()
    m.set(point[0], 1)
    this.cnts.set(point[1], m)
  }
}

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function (point) {
  let ans = 0
  if (this.cnts.has(point[1])) {
    for (const x of this.cnts.get(point[1]).keys()) {
      // 总归既要加又要减所以可以不用取绝对值
      const diff = x - point[0]
      if (diff != 0) {
        if (this.cnts.has(point[1] + diff)) {
          const other = this.cnts.get(point[1] + diff)
          if (other.has(x) && other.has(point[0]))
            ans +=
              this.cnts.get(point[1]).get(x) *
              other.get(x) *
              other.get(point[0])
        }
        if (this.cnts.has(point[1] - diff)) {
          const other = this.cnts.get(point[1] - diff)
          if (other.has(x) && other.has(point[0]))
            ans +=
              this.cnts.get(point[1]).get(x) *
              other.get(x) *
              other.get(point[0])
        }
      }
    }
  }
  return ans
}

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */
