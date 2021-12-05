var deleteMiddle = function (head) {
  let slow = head,
    fast = head
  let prev = null
  while (fast.next && fast.next.next) {
    prev = slow
    slow = slow.next
    fast = fast.next.next
  }
  if (fast.next) {
    const next2 = slow.next.next
    slow.next = next2
  } else {
    let next = slow.next
    if (prev) {
      prev.next = next
    } else {
      head = null
    }
  }
  return head

  let slow = head,
    fast = head
  while (fast && fast.next.next) {
    slow = head.next
    fast = fast.next.next
  }
}
