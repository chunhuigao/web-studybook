class Heap {
  constructor(compare) {
    this.list = [0]
    this.compare = typeof compare === 'function' ? compare : this.defaultCompare
  }

  defaultCompare(a, b) {
    return a > b
  }

  swap(x, y) {
    const t = this.list[x]
    this.list[x] = this.list[y]
    this.list[y] = t
  }
  isEmpty() {
    return this.list.length === 1
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
    const { list, left, right, compare } = this
    const size = this.getSize()
    while (left(k) <= size) {
      let _left = left(k)
      if (right(k) <= size && compare(list[right(k)], list[_left])) {
        _left = right(k)
      }
      if (compare(list[k], list[_left])) return
      this.swap(k, _left)
      k = _left
    }
  }
}

var maxEvents = function (events) {
  events.sort((a, b) => a[0] - b[0])
  const minHeap = new Heap((a, b) => a < b)
  const len = events.length
  let index = 0
  let result = 0
  let end = 1
  while (index < len || !minHeap.isEmpty()) {
    while (index < len && events[index][0] <= end) {
      minHeap.push(events[index][1])
      index++
    }
    while (!minHeap.isEmpty() && minHeap.top() < end) {
      minHeap.pop()
    }
    console.log('minHeap1', minHeap.list, result)
    if (!minHeap.isEmpty()) {
      minHeap.pop()
      result += 1
    }
    console.log('minHeap2', minHeap.list, result)

    end++
  }

  return result
}

var a = [
  [1, 5],
  [1, 5],
  [1, 5],
  [2, 3],
  [2, 3],
]
const aa = maxEvents(a)
console.log('maxEvents', aa)
