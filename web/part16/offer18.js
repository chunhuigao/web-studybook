var deleteNode = function (head, val) {
  if (head.val === val) return head.next
  let header = new ListNode(-1)
  header.next = head
  while (head && head.next) {
    if (head.next.val === val) {
      head.next = head.next.next
    } else {
      head = head.next
    }
  }
  return header.next
}
