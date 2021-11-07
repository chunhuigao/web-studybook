function reducer(state = 1, action) {
  switch (action.type) {
    case 'add':
      return state + 1
    default:
      return state
  }
}

function thunk({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      if (typeof action === 'function') {
        return action(dispatch, getState)
      }
      return next(action)
    }
  }
}

function applyMiddleware(...middlewares) {
  return function (createStore) {
    return function (reducer) {
      const store = createStore(reducer)
      let dispatch = store.dispatch
      const middleAPI = {
        dispatch: (...args) => dispatch(...args),
        getState: store.getState,
      }
      const chian = middlewares.map((middleware) => middleware(middleAPI))
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

// createStore
function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer)
  }
  let currentState = undefined
  let dispatchListener = []
  function getState() {
    return currentState
  }
  function dispatch(action) {
    currentState = reducer(currentState, action)
    dispatchListener.forEach((listener) => listener())
  }
  function subscribe(listener) {
    dispatchListener.push(listener)
    return function () {
      const idx = dispatchListener.indexOf(listener)
      dispatchListener.splice(idx, 1)
    }
  }
  dispatch({ type: 'redux-init' })

  return {
    getState,
    dispatch,
    subscribe,
  }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => {
  result = store.getState()
  console.log('result2', result)
})
let result = store.getState()
console.log('result1', result)
store.dispatch({ type: 'add' })
store.dispatch((dispatch) => {
  console.log('我执行了吗？', dispatch)
  setTimeout(() => {
    dispatch({ type: 'add' })
  }, 1000)
})
