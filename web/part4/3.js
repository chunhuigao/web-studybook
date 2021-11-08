//哈希表
const hasCycle = function (head) {
  const res = []
  while (head) {
    if (res.includes(head)) {
      return true
    }
    res.push(head)
    head = head.next
  }
  return false
}

//快慢指针
var hasCycle = function (head) {
  if (head === null || head.next === null) return false
  let fast = head.next
  let slow = head
  while (fast !== null && fast.next !== null) {
    if (fast === slow) return true
    fast = fast.next.next
    slow = slow.next
  }
  return false
}
