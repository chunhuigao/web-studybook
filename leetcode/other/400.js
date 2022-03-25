// class Solution {
//   public int findNthDigit(int n) {
//       int len = 1;
//       while (len * 9 * Math.pow(10, len - 1) < n) {
//           n -= len * 9 * Math.pow(10, len - 1);
//           len++;
//       }
//       long s = (long) Math.pow(10, len - 1);
//       s += n / len - 1;
//       n -= len * (n / len);
//       return n == 0 ? (int) (s % 10) : (int) ((s + 1) / Math.pow(10, len - n) % 10);
//   }
// }

var findNthDigit = function (n) {
  //字符串长度
  let len = 1
  let t = 0
  while (t + len * 9 * Math.pow(10, len - 1) < n) {
    t += len * 9 * Math.pow(10, len - 1)
    len++
  }
  const diff = n - t - 1
  const offset = Math.floor(diff / len)
  const p = diff % len
  const start = Math.pow(10, len - 1)
  const string = String(start + offset)
  return string[p]
 
}

const aa = findNthDigit(190)
console.log('aa', aa)
