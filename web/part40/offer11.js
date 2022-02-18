var minArray = function (numbers) {
  let len = numbers.length
  let left = 0
  let right = len - 1
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2)
    if (numbers[mid] > numbers[right]) {
      left = mid + 1
    } else if (numbers[mid] == numbers[right]) {
      right = right - 1
    } else {
      right = mid
    }
  }
  return numbers[left]
}
var numbers = [3, 4, 5, 1, 2]
var aa = minArray(numbers)
