var partition = function (head, x) {
  let header = new ListNode(-101)
  let next = new ListNode(-101)
  let start = header
  let end = next

  while (head !== null) {
    if (head.val >= x) {
      end.next = head
      head = head.next
      end = end.next
      end.next = null
    } else {
      start.next = head
      head = head.next
      start = start.next
      start.next = null
    }
  }
  start.next = next.next

  return header.next
}
