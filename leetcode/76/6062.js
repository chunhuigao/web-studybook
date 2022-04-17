var ATM = function () {
  this.list = [0, 0, 0, 0, 0];
};

/**
 * @param {number[]} banknotesCount
 * @return {void}
 */
ATM.prototype.deposit = function (banknotesCount) {
  for (let i = 0; i < 5; i++) {
    this.list[i] += Number(banknotesCount[i]);
  }
};

/**
 * @param {number} amount
 * @return {number[]}
 */
ATM.prototype.withdraw = function (amount) {
  const map = [20, 50, 100, 200, 500];
  let list = [0, 0, 0, 0, 0];
  let copy = this.list.map((v) => v);
  // console.log(copy)
  for (let i = 4; i >= 0; i--) {
    while (amount >= map[i] && copy[i] > 0) {
      const c = Math.floor(amount / map[i]);
      if (c >= copy[i]) {
        amount = amount - map[i] * copy[i];
        list[i] = copy[i];
        copy[i] = 0;
      } else {
        amount = amount - map[i] * c;
        copy[i] -= c;
        list[i] = c;
      }
    }
  }
  if (amount === 0) {
    this.list = copy;
    return list;
  }
  return [-1];
};

/**
 * Your ATM object will be instantiated and called as such:
 * var obj = new ATM()
 * obj.deposit(banknotesCount)
 * var param_2 = obj.withdraw(amount)
 */
