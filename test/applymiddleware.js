/*

 * @Author: mikey.zhaopeng
 * @Date: 2021-11-07 21:29:59
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-11-19 22:22:48
 *
 * 现在有函数f1,f2,f3, 实现一个函数，f3执行是，f1,f2也执行
 */

function f1() {
  return function (next) {
    return function (action) {
      if (typeof action === 'function') {
        return action()
      }
      console.log('我是f1')
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
      console.log('我是f2')
      return next(action)
    }
  }
}

function f3(enhancer) {
  if (typeof enhancer === 'function') {
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
    return f
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
aa('我是f3')
