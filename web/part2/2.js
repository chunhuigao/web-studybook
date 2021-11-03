const s1 = readline()
const s2 = readline()
const a1 = JSON.parse(s1 || '[]')
const a2 = JSON.parse(s2 || '[]')

function ListNode(val) {
  this.val = val
  this.next = null
}

// array->list
function generateList(array) {
  const fakeHead = new ListNode(0)
  let current = fakeHead

  for (let i = 0; i < array.length; i++) {
    current.next = { val: array[i], next: null }
    current = current.next
  }

  return fakeHead.next
}

// list->array
function generateArray(list) {
  let res = []

  while (list) {
    res.push(list.val)
    list = list.next
  }

  return res
}

let l1 = generateList(a1)
let l2 = generateList(a2)
if (l1 === null) {
  console.log(JSON.stringify(generateArray(l2)))
} else if (l2 === null) {
  console.log(JSON.stringify(generateArray(l1)))
} else {
  let header = new ListNode(0)
  let current = header
  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val <= l2.val) {
        current.next = new ListNode(l1.val)
        l1 = l1.next
      } else {
        current.next = new ListNode(l2.val)
        l2 = l2.next
      }
      current = current.next
    } else {
      if (l1) {
        current.next = l1
        l1 = null
      }
      if (l2) {
        current.next = l2
        l2 = null
      }
    }
  }
  console.log(JSON.stringify(generateArray(header.next)))
}
