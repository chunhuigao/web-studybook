var deleteDuplicates = function (head) {
  if (head === null) return null
  let header = head
  while (header && header.next) {
    // 下一个
    if (header.val == header.next.val) {
      header.next = header.next.next
    } else {
      header = header.next
    }
  }
  return head
}
