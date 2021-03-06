class Bitset {
  constructor(size) {
    this.list = Array(size).fill(0)
    this.sign = 0
    this.oneNumber = 0
  }
  fix(idx) {
    if (this.sign === 0) {
      if (this.list[idx] === 0) {
        this.list[idx] = 1
        this.oneNumber++
      }
    } else {
      if (this.list[idx] === 1) {
        this.list[idx] = 0
        this.oneNumber++
      }
    }
  }
  unfix(idx) {
    if (this.sign === 0) {
      if (this.list[idx] === 1) {
        this.list[idx] = 0
        this.oneNumber--
      }
    } else {
      if (this.list[idx] === 0) {
        this.list[idx] = 1
        this.oneNumber--
      }
    }
  }
  flip() {
    const len = this.list.length
    if (this.sign === 0) {
      this.sign = 1
    } else {
      this.sign = 0
    }
    this.oneNumber = len - this.oneNumber
  }
  all() {
    return this.oneNumber === this.list.length
  }
  one() {
    return this.oneNumber > 0
  }
  count() {
    return this.oneNumber
  }
  toString() {
    let s = ''
    if (this.sign === 0) return this.list.join('')
    for (let i = 0; i < this.list.length; i++) {
      s += this.list[i] ? 0 : 1
    }
    return s
  }
}
