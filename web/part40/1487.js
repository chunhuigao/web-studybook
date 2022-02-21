var getFolderNames = function (names) {
  const len = names.length
  let map = []
  for (let i = 0; i < len; i++) {
    const k = names[i]
    if (map[k] === undefined) {
      map[k] = 1
    } else {
      let start = map[k]
      while (map[`${k}(${start})`]) {
        start++
      }
      names[i] = `${k}(${start})`
      map[names[i]] = 1

      map[k] += 1
    }
  }
  return names
}
