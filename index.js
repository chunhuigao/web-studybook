function checkDateFormat(s) {
  let string = s
  if (
    /^\d{4}-\d{2}-\d{2}$/.test(s) ||
    /^\d{4}.\d{2}.\d{2}$/.test(s) ||
    /^\d{4}_\d{2}_\d{2}$/.test(s)
  ) {
    string = s.replace(/[._-]/g, '')
  }
  if (string.length === 8) {
    const year = string.substring(0, 4)
    const month = string.substring(4, 6)
    const day = string.substring(6, 8)
    const current = new Date(`${year}.${month}.${day}`)
    return current.toString() === 'Invalid Date'
  }
  return false
}
const path = require('path')
console.log('path.resolve(__dirname)', path.resolve(__dirname, 'github-db'))
