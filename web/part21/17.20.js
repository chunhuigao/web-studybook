

/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.minHeap = new MinHeap()
  this.maxHeap = new MaxHeap()
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.maxHeap.isEmpty()) {
    this.maxHeap.push(num)
  } else {
    if (this.maxHeap.top() > num) {
      this.maxHeap.push(num)
    } else {
      this.minHeap.push(num)
    }
    let maxSize = this.maxHeap.getSize()
    let minSize = this.minHeap.getSize()
    if (minSize > maxSize) {
      let top = this.minHeap.pop()
      this.maxHeap.push(top)
    } else if (maxSize - 1 > minSize) {
      let top = this.maxHeap.pop()
      this.minHeap.push(top)
    }
  }
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let maxSize = this.maxHeap.getSize()
  let minSize = this.minHeap.getSize()
  if (maxSize === minSize) {
    return (this.maxHeap.top() + this.minHeap.top()) / 2
  } else {
    return this.maxHeap.top()
  }
}





class MaxHeap {
  constructor() {
    this.data = [0]
    this.count = 0
  }

  isEmpty() {
    return this.count === 0
  }

  push(val) {
    this.count++
    this.data[this.count] = val
    let i = this.count
    while (parseInt(i / 2) > 0 && this.data[i] > this.data[parseInt(i / 2)]) {
      this.swap(i, parseInt(i / 2))
      i = parseInt(i / 2)
    }
  }

  pop() {
    let top = this.data[1]
    if (this.count > 1) {
      this.data[1] = this.data[this.count]
      this.data.splice(this.count, 1)
      this.count--
      let i = 1
      while (true) {
        let maxPos = i
        if (i * 2 <= this.count && this.data[i] < this.data[i * 2]) {
          maxPos = i * 2
        }
        if (
          i * 2 + 1 <= this.count &&
          this.data[maxPos] < this.data[i * 2 + 1]
        ) {
          maxPos = i * 2 + 1
        }
        if (maxPos === i) {
          break
        }
        this.swap(i, maxPos)
        i = maxPos
      }
    } else {
      this.count = 0
      this.data.splice(1, 1)
    }
    return top
  }

  swap(i, j) {
    let temp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = temp
  }

  getSize() {
    return this.count
  }

  top() {
    return this.data[1]
  }
}

class MinHeap {
  constructor() {
    this.data = [0]
    this.count = 0
  }

  push(val) {
    this.count++
    this.data[this.count] = val
    let i = this.count
    while (parseInt(i / 2) > 0 && this.data[i] < this.data[parseInt(i / 2)]) {
      this.swap(i, parseInt(i / 2))
      i = parseInt(i / 2)
    }
  }

  pop() {
    let top = this.data[1]
    if (this.count > 1) {
      this.data[1] = this.data[this.count]
      this.data.splice(this.count, 1)
      this.count--
      let i = 1
      while (true) {
        let maxPos = i
        if (i * 2 <= this.count && this.data[i] > this.data[i * 2]) {
          maxPos = i * 2
        }
        if (
          i * 2 + 1 <= this.count &&
          this.data[maxPos] > this.data[i * 2 + 1]
        ) {
          maxPos = i * 2 + 1
        }
        if (maxPos === i) {
          break
        }
        this.swap(i, maxPos)
        i = maxPos
      }
    } else {
      this.count = 0
      this.data.splice(1, 1)
    }
    return top
  }

  swap(i, j) {
    let temp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = temp
  }

  getSize() {
    return this.count
  }

  top() {
    return this.data[1]
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
