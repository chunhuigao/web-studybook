/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let len = bills.length
  const money = {
    5: 0,
    10: 0,
  }
  for (let i = 0; i < len; i++) {
    if (bills[i] === 5) {
      money[5] += 1
    } else if (bills[i] === 10) {
      money[10] += 1
      if (money[5] === 0) return false
      money[5] -= 1
    } else {
      if (money[5] === 0) return false
      if (money[10] === 0 && money[5] < 3) return false
      if (money[10] === 0) {
        money[5] -= 3
      } else {
        money[10] -= 1
        money[5] -= 1
      }
    }
  }
  return true
}
