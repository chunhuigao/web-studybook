const s1 = readline()
const s2 = readline()
const list1 = JSON.parse(s1 || '[]')
const list2 = JSON.parse(s2 || '[]')

let node1 = arrayToNodeList(list1)
let node2 = arrayToNodeList(list2)

const result = []
while (node1 || node2) {
  if (node1 && node2) {
    if (node1.val > node2.val) {
      result.push(node2.val)
      node2 = node2.next
    } else {
      result.push(node1.val)
      node1 = node1.next
    }
  } else {
    if (node1) {
      result.push(node1.val)
      node1 = node1.next
    }
    if (node2) {
      result.push(node2.val)
      node2 = node2.next
    }
  }
}

const res = arrayToNodeList(result)

console.log(s1, s2, res)

// 链表构造函数
function ListNode(val) {
  this.val = val
  this.next = null
}

//数组转链表
function arrayToNodeList(list) {
  let header = new ListNode(0)
  let current = header
  for (let i = 0; i < list.length; i++) {
    current.next = { val: Number(list[i]), next: null }
    current = current.next
  }
  return header.next
}

// 链表转数组
function nodeListToArray(node) {
  const list = []
  let header = node
  while (header) {
    list.push(header.val)
    header = header.next
  }
  return list
}
