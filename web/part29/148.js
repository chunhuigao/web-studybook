var sortList = function (head) {
  if (head === null || head.next === null) return head
  let slow = head
  let fast = head.next.next
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  const left = slow.next
  slow.next = null
  const right = head
  //console.log(right);
  return helper(sortList(left), sortList(right))
  function helper(a, b) {
    //console.log(a, b);
    const header = new ListNode(-1)
    let root = header
    while (a && b) {
      if (a.val < b.val) {
        root.next = a
        a = a.next
      } else {
        root.next = b
        b = b.next
      }
      root = root.next
    }
    root.next = a === null ? b : a
    return header.next
  }
}
