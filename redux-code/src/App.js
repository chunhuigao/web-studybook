import { createStore, combineReducers } from 'redux'
import './App.css'
import Store from './redux/store'
import React, { Component } from 'react'
import Home from './pages/Home'
import About from './pages/About'

export default class App extends Component {
  componentDidMount() {
    this.subscribe = Store.subscribe(() => {
      this.forceUpdate()
    })
  }
  componentWillUnmount() {}
  render() {
    return (
      <div className="App">
        <h2>redux</h2>
        <h4>数据{Store.getState().reducerName}</h4>
        <button
          onClick={() => {
            Store.dispatch((dispatch) => {
              dispatch({
                type: 'add',
              })
            })
          }}
        >
          点击我，触发action
        </button>
        <button
          onClick={() => {
            this.subscribe()
          }}
        >
          点击我，取消订阅
        </button>
        <Home />
        <About title="南京" />
      </div>
    )
  }
}
