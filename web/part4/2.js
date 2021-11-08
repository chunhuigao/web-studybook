var kthToLast = function (head, k) {
  let root = head
  let list = []
  while (root) {
    list.unshift(root.val)
    root = root.next
  }
  return list[k - 1]
}

// 快慢指针
var kthToLast = function (head, k) {
  let fast = head
  let slow = head
  while (k--) {
    fast = fast.next
  }
  while (fast) {
    slow = slow.next
    fast = fast.next
  }
  return slow.val
}
