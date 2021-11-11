//import { createStore, applyMiddleware } from 'redux'

// import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from '../yRedux/index'
import thunk from '../yRedux/thunk'
function reducerName(state = 1, { type, num }) {
  switch (type) {
    case 'add':
      return state + (num || 1)
    case 'mins':
      return state - (num || 1)
    default:
      return state
  }
}

const reducers = combineReducers({
  reducerName,
})

// createStore是一个函数，返回了一个对象,
// 使用了applyMiddleware,applyMiddleware一个函数
const store = createStore(reducers, applyMiddleware(thunk))

export default store
