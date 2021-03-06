import React, { useReducer } from 'react'
const reducer = (state = 1, action) => {
  switch (action.type) {
    case 'add':
      return state + 1

    default:
      return state - 1
  }
}
const init = (args) => {
  return Number(args)
}
export default function Index() {
  const [state, dispatch] = useReducer(reducer, '10', init)
  console.log('state', state)
  return (
    <div>
      <h3>修改数据:{state}</h3>
      <button
        onClick={() => {
          dispatch({ type: 'add' })
        }}
      >
        点击我，修改数据
      </button>
    </div>
  )
}
