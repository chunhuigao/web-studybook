var getKthFromEnd = function (head, k) {
  let root = head
  while (k--) {
    root = root.next
  }
  while (root) {
    root = root.next
    head = head.next
  }
  return head
}
