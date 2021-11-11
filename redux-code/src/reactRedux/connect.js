import { useCallback, useContext, useReducer, useState } from 'react'
import { bindActionCreators } from 'redux'
import { Context } from './Provider'
export default function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrappdComponent) {
    return function (props) {
      // 子孙组件接受数据
      const store = useContext(Context)
      console.log('store2132', store)
      const stateProps = mapStateToProps(store.getState())
      let dispatchProps = { dispatch: store.dispatch }
      if (typeof mapDispatchToProps === 'function') {
        dispatchProps = mapDispatchToProps(store.dispatch)
      } else if (typeof mapDispatchToProps === 'object') {
        dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch)
      }
      //const [, forceUpdate] = useReducer((x) => x + 1, 0)
      const forceUpdate = useForceUpdate()
      store.subscribe(() => {
        forceUpdate()
      })
      return <WrappdComponent {...props} {...stateProps} {...dispatchProps} />
    }
  }
}

export function useForceUpdate() {
  // const [state, setState] = useState(0)
  const [, setState] = useReducer((x) => x + 1, 0)
  const updata = useCallback(() => {
    //setState((prve) => prve + 1)
    setState()
  }, [])
  return updata
}
