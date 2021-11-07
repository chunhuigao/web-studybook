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

const store = createStore(reducerName)

export default store
