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

var minimumFinishTime = function (tires, changeTime, numLaps) {
  const minHeap = new Heap((a, b) => a[0] < b[0])
  const len = tires.length

  for (let i = 0; i < len; i++) {
    const temp = [tires[i][0], tires[i][0], tires[i][1], 0]
    minHeap.push(temp)
  }

  let result = 0
  let current = minHeap.top()

  let idx = 0
  while (idx < numLaps) {
    console.log('current', current)
    if (idx === 0) {
      const [t, a, b, n] = current
      result += t
      current = [...[a * Math.pow(b, n + 1), a, b, n + 1]]
    } else {
      // 要换轮胎吗？

      const [t, a, b, n] = minHeap.top()
      const [t1, a1, b1, n1] = current

      if (t1 <= t + changeTime) {
        result += t1
        current = [a * Math.pow(b, n1 + 1), a, b, n1 + 1]
      } else {
        result = result + t + changeTime
        current = [a * Math.pow(b, n + 1), a, b, n + 1]
      }
    }
    idx++
  }

  return result
}

var tires = [
    [1, 10],
    [2, 2],
    [3, 4],
  ],
  changeTime = 6,
  numLaps = 5
const aa = minimumFinishTime(tires, changeTime, numLaps)
console.log(aa)
