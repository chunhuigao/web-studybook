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
    const { add, mins } = this.props
    return (
      <div >
        <button onClick={add}>点击我，action</button>
        <button onClick={mins}>减少数据</button>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop,
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
