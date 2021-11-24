var reverseList = function (head) {
  if (head === null) return null
  let pre = null
  let current = head
  let next = head.next
  while (current) {
    current.next = pre
    pre = current
    current = next
    next = next ? next.next : null
  }
  return pre
}
