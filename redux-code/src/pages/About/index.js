import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class About extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    const { add } = this.props
    return (
      <div>
        <button onClick={add}>点击我，action</button>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log('sta', state)
  return {
    prop: state.prop,
  }
}
const mapDispatchToProps = (dispatch) => {
  let creator = {
    add: () => ({ type: 'add' }),
  }
  creator = bindActionCreators(creator, dispatch)
  return {
    dispatch,
    ...creator,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(About)
