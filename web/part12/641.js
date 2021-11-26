class MyCircularDeque {
  constructor(k) {
    this.capacity = k + 1
    this.list = new Array(k + 1)
    this.front = 0
    this.rear = 0
  }
  insertFront(value) {
    if (this.isFull()) {
      return false
    }
    this.front = (this.front - 1 + this.capacity) % this.capacity
    this.list[this.front] = value
    return true
  }
  insertLast(value) {
    if (this.isFull()) {
      return false
    }
    this.list[this.rear] = value
    this.rear = (this.rear + 1) % this.capacity
    return true
  }
  deleteFront() {
    if (this.isEmpty()) {
      return false
    }
    this.front = (this.front + 1) % this.capacity
    return true
  }
  deleteLast() {
    if (this.isEmpty()) {
      return false
    }
    this.rear = (this.rear - 1 + this.capacity) % this.capacity
    return true
  }
  getFront() {
    if (this.isEmpty()) {
      return -1
    }
    return this.list[this.front]
  }
  getRear() {
    if (this.isEmpty()) {
      return -1
    }
    // 当 rear 为 0 时防止数组越界, rear指向的是下一个插入的元素的位置，元素为空，需要-1；
    return this.list[(this.rear - 1 + this.capacity) % this.capacity]
  }
  isEmpty() {
    return this.front == this.rear
  }
  isFull() {
    return (this.rear + 1) % this.capacity == this.front
  }
}
