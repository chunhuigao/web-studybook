function f1() {
  return function (next) {
    return function (action) {
      console.log(1)
      if (typeof action === 'function') {
        return action()
      }

      return next(action)
    }
  }
}
function f2() {
  return function (next) {
    return function (action) {
      if (typeof action === 'function') {
        action()
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

function applyMiddleware(...middlewares) {
  return function (f3) {
    const API = {
      f3: (action, ...args) => f3(action, args),
    }
    const chian = middlewares.map((middlewares) => middlewares(API))
    const dispatch = compose(...chian)(f3)
    return dispatch()
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

aa(() => {
  console.log(11)
})
