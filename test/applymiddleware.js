/*

 * @Author: mikey.zhaopeng
 * @Date: 2021-11-07 21:29:59
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-11-07 21:48:10
 *
 * 现在有函数f1,f2,f3, 实现一个函数，f3执行是，f1,f2也执行
 */

function f1() {
  return function (next) {
    return function (action) {
      if (typeof action === 'function') {
        return action()
      }
      console.log(1, next, action)
      return next(action)
    }
  }
}
function f2() {
  return function (next) {
    return function (action) {
      if (typeof action === 'function') {
        return action()
      }
      console.log(2)
      return next(action)
    }
  }
}

function f3(enhancer) {
  if (enhancer) {
    return enhancer(f3)
  }
  return function (action) {
    console.log('action', action)
  }
}
//中间件函数
function applyMiddleware(...middlewares) {
  return function (f3) {
    const chian = middlewares.map((middleware) => middleware({}))
    const f = compose(...chian)(f3)
    console.log('action', f)
    return f()
  }
}

function compose(...funcs) {
  if (funcs.length === 0) return (args) => args
  if (funcs.length === 1) return funcs[0]
  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  )
}
const aa = f3(applyMiddleware(f1, f2))
aa(function () {
  console.log({ type: 'add' })
})
