//import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from '../yRedux/index'

function reducerName(state = 1, action) {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'cut':
      return state - 1
    default:
      return state
  }
}

// createStore是一个函数，返回了一个对象,
// 使用了applyMiddleware,applyMiddleware一个函数
const store = createStore(reducerName, applyMiddleware(thunk))

export default store
