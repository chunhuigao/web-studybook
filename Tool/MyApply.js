Function.prototype.myApply = function (context, args) {
  // 此处args是数组，已经是数组，不需要使用扩展符展开；此处可以增加args是否为数组的判断

  // context 表示Man的this,如果为空，将 context 指向全局对象，浏览器下windos,node环境global
  if (typeof context === 'undefined' || context === null) {
    context = window
  }
  // 此处使用Symbol，防止context为window是，命名的key与window已有的属性名冲突
  let key = Symbol()
  // 在man对象上挂载this,这里的this应为被Person调用，所以此处的this指向的是Person
  context[key] = this
  // 执行 Person 函数，因为此处是context调用，context又是Man的this；
  // 所以 Person 函数执行的时候，Person中this就指向了context，指向了Man
  let fn = context[key](...args)
  // 删除对象上的函数
  delete context[key]
  // Person函数的返回值。若没有返回值，则返回 `undefined`
  return fn
}
