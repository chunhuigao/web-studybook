Function.prototype.myCall = function (context, ...args) {
  // context 表示Man的this,如果为空，将 context 指向全局对象，浏览器下windos,node环境global
  if (typeof context === 'undefined' || context === null) {
    context = window
  }
  // 此处使用 Symbol ，防止context当前命名的属性值key与context已有的属性名冲突
  let key = Symbol()
  // 在man对象上挂载this,这里的this应为被Person调用，所以此处的this指向的是Person
  // context[key] = this
  Object.defineProperty(context, key, {
    value: this,
    //是否为枚举属性
    enumerable: false,
  })
  // 执行 Person 函数，因为此处是context调用，context又是Man的this；
  // 所以 Person 函数执行的时候，Person中this就指向了context，指向了Man
  let fn = context[key](...args)
  // 删除对象上的函数
  delete context[key]

  //console.log('context', context)
  // Person函数的返回值。若没有返回值，则返回 `undefined`
  return fn
}

function Person(name, price) {
  this.name = name
  this.price = price
  console.log('this2', this)
}

const objct = {
  beijing: 'ceshi',
}

function Man(name, price) {
  // 将Person中属性挂载到Man函数
  Person.myCall(this, name, price)
  this.category = 'food'
}
Person.myCall(objct)
Person.call(objct)
