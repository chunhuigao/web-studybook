//import { createStore } from 'redux'

import { createStore } from '../yRedux/index'

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

// createStore是一个函数，返回了一个对象
const store = createStore(reducerName)

export default store
