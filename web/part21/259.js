/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.minHeap = new Heap((a, b) => a < b)
  this.maxHeap = new Heap((a, b) => a > b)
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
  console.log('maxHeap', this.maxHeap.list)
  console.log('minHeap', this.minHeap.list)
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

class Heap {
  constructor(compare) {
    this.list = [0]
    this.compare = typeof compare === 'function' ? compare : this.defaultCompare
  }

  defaultCompare(a, b) {
    return a < b
  }

  swap(x, y) {
    const t = this.list[x]
    this.list[x] = this.list[y]
    this.list[y] = t
  }
  isEmpty() {
    return this.num === 0
  }
  getSize() {
    return this.list.length - 1
  }
  top() {
    return this.list[1]
  }

  left(x) {
    return 2 * x
  }
  right(x) {
    return 2 * x + 1
  }
  parent(x) {
    return Math.floor(x / 2)
  }

  push(val) {
    // 新增数据，向堆尾添加
    this.list.push(val)

    this.up(this.list.length - 1)
  }
  // 上浮
  up(k) {
    const { list, parent, compare } = this
    while (k > 1 && compare(list[k], list[parent(k)])) {
      this.swap(parent(k), k)
      k = parent(k)
    }
  }
  pop() {
    const { list } = this
    if (list.length === 0) return null
    this.swap(1, list.length - 1)
    const top = list.pop()
    this.down(1)
    return top
  }

  down(k) {
    let { list, compare, left, right } = this
    let size = this.getSize()
    // 如果沉到堆底，就沉不下去了
    while (left(k) <= size) {
      let _left = left(k)
      if (right(k) <= size && compare(list[right(k)], list[_left])) {
        _left = right(k) // 选择左右子节点中更靠近堆顶的，这样能维持下沉后原本的 left与right 之间的顺序关系
      }
      // 如果当前的k比子节点更靠近堆顶，不用下沉了
      if (compare(list[k], list[_left])) return
      // 下沉
      this.swap(k, _left)
      k = _left
    }
  }
}

var obj = new MedianFinder()
obj.addNum(11)
obj.addNum(22)
obj.addNum(33)
var param_2 = obj.findMedian()
