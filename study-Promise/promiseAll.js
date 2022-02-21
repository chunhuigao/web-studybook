Promise.all = function (promises) {
  let count = 0
  let len = promises.length
  let result = []
  return new Promise((resolve, reject) => {
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i])
        .then((value) => {
          result[i] = value
          count++
          if (count === len) resolve(result)
        })
        .catch((e) => {
          reject(e)
        })
    }
  })
}
