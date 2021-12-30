const isEmptyObject = (o) => {
  if (typeof o === 'object') {
    return (
      Object.getOwnPropertyNames(o).length === 0 &&
      Object.getOwnPropertySymbols(o).length === 0
    )
  } else {
    return false
  }
}
const k1 = Symbol()
const k2 = '1'
var a = {}
var b = {}
b[k1] = 1

console.log(isEmptyObject(a))
