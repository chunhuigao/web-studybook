var MedianFinder = function () {
  this.list = []
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.list.push(num)
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  this.list.sort(function (a, b) {
    return a - b
  })
  if (this.list.length % 2 == 0) {
    return (
      (this.list[this.list.length / 2] + this.list[this.list.length / 2 - 1]) /
      2
    )
  } else {
    return this.list[(this.list.length - 1) / 2]
  }
}
