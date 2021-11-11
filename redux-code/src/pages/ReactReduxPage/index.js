import React from 'react'
//import { useSelector, useDispatch } from 'react-redux'
import { useSelector, useDispatch } from '../../reactRedux'
function Index(props) {
  const dispatch = useDispatch()
  const { reducerName } = useSelector(({ reducerName }) => ({ reducerName }))
  return (
    <div>
      <h3>reactReduxHook</h3>
      <button onClick={() => dispatch({ type: 'add' })}>{reducerName}</button>
    </div>
  )
}

export default Index
