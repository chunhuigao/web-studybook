//哈希表

var copyRandomList = function (head) {
  let header = head
  const map = new Map()
  while (header) {
    map.set(header, new Node(header.val))
    header = header.next
  }
  header = head

  while (header) {
    const current = map.get(header)
    current.next = map.get(header.next) || null
    current.random = map.get(header.random) || null
    header = header.next
  }
  return map.get(head)
}
