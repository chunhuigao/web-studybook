import React, { Component } from 'react'
// import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
import { bindActionCreators } from '../../yRedux'
import { connect } from '../../reactRedux/index'

class About extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    const { add, mins, dispatch, reducerName } = this.props
    return (
      <div>
        <h3>这里显示数据{reducerName}</h3>
        <button onClick={add}>点击我，action</button>
        <button onClick={mins}>减少数据</button>
        <button onClick={() => dispatch({ type: 'add', num: 10 })}>
          增加数据
        </button>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
  }
}
const mapDispatchToProps = (dispatch) => {
  let creator = {
    add: () => ({ type: 'add' }),
    mins: () => ({ type: 'mins' }),
  }
  creator = bindActionCreators(creator, dispatch)
  return {
    dispatch,
    ...creator,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(About)
