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

var isType = function (type) {
  return function (obj) {
    console.log(
      'Object.prototype.toString.call(obj)',
      Object.prototype.toString.call(obj)
    )
    return Object.prototype.toString.call(obj) == '[object ' + type + ']'
  }
}
const yinyin = isType('Array')([])
const yinyin2 = isType('Object')({})
console.log('yinyin', yinyin)
console.log('yinyin', yinyin2)
const k1 = Symbol()
const k2 = '1'
var a = {}
var b = {}
b[k1] = 1

console.log(isEmptyObject(a))
