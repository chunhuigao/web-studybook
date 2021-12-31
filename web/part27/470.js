var rand10 = function () {
  function r01() {
    let r = 0
    do {
      r = rand7()
    } while (r === 4)
    return r < 4 ? 0 : 1
  }
  let result = 0
  do {
    result = (r01() << 3) + (r01() << 2) + (r01() << 1) + r01()
  } while (result > 9)
  return result + 1
}
