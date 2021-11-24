var removeNthFromEnd = function (head, n) {
  if (!head || !head.next) return null
  let header = new ListNode(-1)
  header.next = head
  let frist = header
  let second = header
  for (let i = 0; i < n; i++) {
    frist = frist.next
  }
  while (frist.next != null) {
    frist = frist.next
    second = second.next
  }
  second.next = second.next.next
  return header.next
}
