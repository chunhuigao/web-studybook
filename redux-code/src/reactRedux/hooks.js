import { useContext } from 'react'
import { Context } from './Provider'
import { useForceUpdate } from './connect'
export function useSelector(selector) {
  const store = useContext(Context)
  const selectStete = selector(store.getState())
  const forceUpdate = useForceUpdate()
  store.subscribe(() => {
    forceUpdate()
  })
  return selectStete
}
export function useDispatch() {
  const store = useContext(Context)
  console.log('useContext', Context)
  console.log('store', store)
  return store.dispatch
}
