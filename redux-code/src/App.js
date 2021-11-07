import { createStore } from 'redux'
import './App.css'
import Store from './redux/store'
import React, { Component } from 'react'

export default class App extends Component {
  componentDidMount() {
    console.log(Store)
    Store.subscribe(() => {
      this.forceUpdate()
    })
  }
  render() {
    return (
      <div className="App">
        <h2>redux</h2>
        <h4>数据{Store.getState()}</h4>
        <button
          onClick={() => {
            Store.dispatch({
              type: 'add',
            })
          }}
        >
          点击我，触发action
        </button>
      </div>
    )
  }
}
