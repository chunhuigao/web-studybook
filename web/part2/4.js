const list = JSON.parse(readline() || '[]')

//计数
const len = list.length
const array = []

for (let i = 0; i < len; i++) {
  const idx = list[i]
  array[idx] = (array[idx] || 0) + 1
}

const min = Math.min(...list)
const max = Math.max(...list)
const result = []

for (let i = min; i <= max; i++) {
  if (array[i] > 0) {
    result.push(Array(array[i]).fill(i))
    array[i] = 0
  }
}
console.log(result.join(','))
