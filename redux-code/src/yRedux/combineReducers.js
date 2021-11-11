// 返回reducer

// 输入的是对象，返回的是函数
export default function combineReducers(reducers) {
  return function combintion(state = {}, action) {
    let nextState = {}
    let hasChange = false

    for (let key in reducers) {
      const reducer = reducers[key]
      nextState[key] = reducer(state[key], action)
      hasChange = hasChange || nextState[key] !== state[key]
    }
    hasChange =
      hasChange || Object.keys(nextState).length !== Object.keys(state).length
    return hasChange ? nextState : state
  }
}
