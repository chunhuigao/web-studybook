var numberOfBeams = function (bank) {
  const list = bank.filter((v) => Number(v) > 0)

  const len = list.length
  if (len === 1) return 0
  let result = 0
  for (let i = 0; i < len - 1; i++) {
    const current = getNum(list[i])
    const next = getNum(list[i + 1])
    result += current * next
  }
  return result

  function getNum(s) {
    let num = 0
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '1') num++
    }
    return num
  }
}
