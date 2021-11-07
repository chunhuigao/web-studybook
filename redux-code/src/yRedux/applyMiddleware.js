/*
 * @Author: mikey.zhaopeng
 * @Date: 2021-11-07 16:18:22
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-11-07 16:32:01
 * 在store中使用了applyMiddleware，参数是thunk、logger
 *
 *
 * applyMiddleware的作用的增强dispatch
 */

export default function applyMiddleware(...middlewares) {
  //返回第一个函数，函数的参数是createStore
  return function (createStore) {
    //返回了第二层函数，函数的参数是reduer
    return function (reducer) {
      //获取原始store
      const store = createStore(reducer)

      //获取当前原始dispatch
      let dispatch = store.dispatch

      const middleAPI = {
        dispatch: (action, ...args) => dispatch(action, args),
        getState: store.getState,
      }

      // 得到了一个有中间件组成的函数数组；
      const chian = middlewares.map((middleware) => middleware(middleAPI))

      // 将中间件执行的结果返回给dispatch；在调用dispatch的时候使用的就是增强后的dispatch了
      dispatch = compose(...chian)(store.dispatch)

      return {
        ...store,
        dispatch,
      }
    }
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
