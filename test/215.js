/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findKthLargest = function (nums, k) {
  class Heap {
    constructor(compare) {
      this.list = [0] // 下标从1开始好算，下标0废弃
      this.compare =
        typeof compare === 'function' ? compare : this._defaultCompare
    }

    push(item) {
      let { list } = this
      list.push(item)
      this.up(list.length - 1)
      // console.log('push', item, list.slice(1));
    }

    pop() {
      if (this.size === 0) return null //行为同Java的PriorityQueue
      let { list } = this
      this.swap(1, list.length - 1) // 末尾的换上来，堆顶放到最后等待返回
      let res = list.pop()
      this.down(1) // 换上来的末尾尝试下沉
      // console.log('pop', list.slice(1));
      return res
    }

    /**
     * 堆中元素数量
     */
    getSize() {
      return this.list.length - 1
    }

    /**
     * 返回堆顶元素
     */
    peek() {
      return this.list[1]
    }

    /**
     * 上浮第k个元素
     * @param {int} k
     */
    up(k) {
      let { list, compare, parent } = this
      // k 比它的父节点更靠近堆顶，应该继续上浮（k=1 表示已经到达堆顶）
      while (k > 1 && compare(list[k], list[parent(k)])) {
        this.swap(parent(k), k)
        k = parent(k)
      }
    }

    /**
     * 下沉第k个元素
     * @param {int} k
     */
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

    left(k) {
      return k * 2
    }
    right(k) {
      return k * 2 + 1
    }
    parent(k) {
      return Math.floor(k / 2)
    }

    /**
     * 交换位置
     * @param {int} i
     * @param {int} j
     */
    swap(i, j) {
      let list = this.list
      ;[list[i], list[j]] = [list[j], list[i]]
    }

    /**
     * a是否比b更接近堆顶，默认为小顶堆
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    _defaultCompare(a, b) {
      return a < b
    }
  }
  let heap = new Heap() // 小顶堆
  for (let num of nums) {
    heap.push(num)
    if (heap.getSize() > k) heap.pop()
  }

  return heap.peek()
}
