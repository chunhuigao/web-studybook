Function.prototype.myBind = function (context) {
  // 判空
  if (typeof context === 'undefined' || context === null) {
    context = window
  }
  // 此时 context 是 Man 的this

  self = this
  // 此时 self 是 Person 的this
  return function (...args) {
    // 此处可以理解为 Person 使用 apply 修改 Man的 this 值
    return self.apply(context, args)
  }
}

function Person(name, price) {
  this.name = name
  this.price = price
}

function Man(name, price) {
  Person.call(this, name, price)
  console.log(this)
}

function Man2(name, price) {
  Person.myBind(this)(name, price)
}
const obj2 = new Man2('张三2', '男2')
console.log(obj2.name)
