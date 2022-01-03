/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

class Union {
  constructor(n) {
    this.size = Array(n).fill(1)
    this.list = Array(n)
      .fill(0)
      .map((v, i) => i)
  }
  find(x) {
    if (x === this.list[x]) return x
    const root = this.find(this.list[x])
    this.list[x] = root
    return root
  }
  merge(x, y) {
    const rootX = this.find(x)
    const rootY = this.find(y)
    if (rootX === rootY) return
    if (this.size[rootX] > this.size[rootY]) {
      this.list[rootY] = rootX
      this.size[rootX] += this.size[rootY]
    } else {
      this.list[rootX] = rootY
      this.size[rootY] += this.size[rootX]
    }
  }
}
var accountsMerge = function (accounts) {
  const emailMap = new Map()
  const indexMap = new Map()
  let emailNum = 0
  const len = accounts.length
  // 获取数据
  for (let i = 0; i < len; i++) {
    const account = accounts[i][0]
    for (let j = 1; j < accounts[i].length; j++) {
      const email = accounts[i][j]
      indexMap.set(email, emailNum++)
      emailMap.set(email, account)
    }
  }
  const union = new Union(emailNum)

  // 合并数据
  for (let i = 0; i < len; i++) {
    // 为什么取下标1的数据，因为下标为0的数据是账户，下标为1开始的数据才是邮箱
    const fristEmail = accounts[i][1]
    const firstInex = indexMap.get(fristEmail)
    for (let j = 2; j < accounts[i].length; j++) {
      const nextEmail = accounts[i][j]
      const nextIndex = indexMap.get(nextEmail)
      union.merge(firstInex, nextIndex)
    }
  }

  const map = {}
  indexMap.forEach((index, email) => {
    const rootIndex = union.find(index)
    if (map[rootIndex]) {
      map[rootIndex].push(email)
    } else {
      map[rootIndex] = [email]
    }
  })

  let result = []
  Object.keys(map).forEach((k) => {
    const array = map[k]
    array.sort()
    result.push([emailMap.get(array[0]), ...array])
  })
  return result
}

var accounts = [
  ['John', 'johnsmith@mail.com', 'john00@mail.com'],
  ['John', 'johnnybravo@mail.com'],
  ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
  ['Mary', 'mary@mail.com'],
]

const aa = accountsMerge(accounts)
console.log(aa)
