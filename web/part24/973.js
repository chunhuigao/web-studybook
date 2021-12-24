

var kClosest = function (points, k) {
  const list = []
  points.forEach((v) => {
    const n = v[0] * v[0] + v[1] * v[1]
    v[2] = n
  })
  class Heap {
    constructor(compare) {
      this.list = [0]
      this.compare =
        typeof compare === 'function' ? compare : this.defaultCompare
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

  // 大根堆
  const maxHeap = new Heap((a, b) => a[2] > b[2])
  points.forEach((v) => {
    maxHeap.push(v)
    if (maxHeap.getSize() > k) {
      maxHeap.pop()
    }
  })
  const result = []
  for (let i = 0; i < k; i++) {
    const top = maxHeap.top()
    maxHeap.pop()
    result.push([top[0], top[1]])
  }
  // console.log(result)
  return result
}

var points = [
    [3, 3],
    [5, -1],
    [-2, 4],
  ],
  k = 2
const aa = kClosest(points, k)
