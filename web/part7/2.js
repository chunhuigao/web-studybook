// 快慢指针
var isHappy = function (n) {
  function nextNum(num) {
    let t = 0
    while (num) {
      t += Math.pow(num % 10, 2)
      num = Math.floor(num / 10)
    }
    return t
  }
  let slow = n
  let fast = nextNum(n)
  while (slow !== fast) {
    slow = nextNum(slow)
    fast = nextNum(nextNum(fast))
  }
  return slow === 1
}

// 哈希表
var isHappy = function (n) {
  const set = new Set()
  function nextNum(num) {
    let t = 0
    while (num) {
      t += Math.pow(num % 10, 2)
      num = Math.floor(num / 10)
    }
    return t
  }
  while (1) {
    if (n === 1) return true
    if (set.has(n)) return false
    set.add(n)
    n = nextNum(n)
  }
}
