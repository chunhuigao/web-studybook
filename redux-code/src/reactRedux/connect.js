import { useCallback, useContext, useReducer, useState } from 'react'
import { Context } from './Provider'
export default function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrappdComponent) {
    return function (props) {
      // 子孙组件接受数据
      const store = useContext(Context)
      const stateProps = mapStateToProps(store.getState())
      const dispatchProps = { dispatch: store.dispatch }
      //const [, forceUpdate] = useReducer((x) => x + 1, 0)
      const forceUpdate = useForceUpdate()
      store.subscribe(() => {
        forceUpdate()
      })
      return <WrappdComponent {...props} {...stateProps} {...dispatchProps} />
    }
  }
}

function useForceUpdate() {
  // const [state, setState] = useState(0)
  const [, setState] = useReducer((x) => x + 1, 0)
  const updata = useCallback(() => {
    //setState((prve) => prve + 1)
    setState()
  }, [])
  return updata
}
