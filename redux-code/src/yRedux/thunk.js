/*
 * @Author: mikey.zhaopeng
 * @Date: 2021-11-07 20:57:34
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-11-07 21:05:01
 * 在applymiddleware中知道thunk一定是一个函数
 */

export default function thunk({ getState, dispatch }) {
  return function (next) {
    return function (action) {
      console.log('action', action)
      if (typeof action === 'function') {
        return action(dispatch, getState)
      }
      return next(action)
    }
  }
}
