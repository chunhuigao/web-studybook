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

  // down(k) {
  //   const { list, left, right, compare } = this
  //   const size = this.getSize()
  //   console.log('size', size)
  //   while (left(k) <= size) {
  //     let _left = left[k]
  //     if (right(k) <= size && compare(list[right(k)], list[_left])) {
  //       _left = right(k)
  //     }
  //     if (compare(list[k], list[_left])) return
  //     this.swap(k, _left)
  //     k = _left
  //   }
  // }
}
//[3,2,1,5,6,4]
//[[7,3,8,5,1,2]
const maxHead = new Heap((a, b) => {
  return a > b
})
maxHead.push(7)
maxHead.push(3)
maxHead.push(8)
maxHead.push(5)
maxHead.pop(5)
// maxHead.pop()
// maxHead.push(6)
// maxHead.pop()
// maxHead.push(4)
// maxHead.push(10)
// maxHead.push(15)
// maxHead.push(20)
console.log('maxHead', maxHead.list)
console.log('maxHead', maxHead.top())
