/*
 * @Author: mikey.zhaopeng
 * @Date: 2021-11-07 15:55:36
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-11-09 22:44:49
 * 通过 createStore简单使用可以知道
 * createStore是一个函数，执行createStore函数的时候返回了一个对象；
 * 对象中包含了三个方法getState、dispatch、subscribe;
 * 入参是一个reducer函数
 *
 *
 * applyMiddleware是createStore第二个参数，所以在createStore需要增加第二个参数;
 * applyMiddleware是一个函数，还返回了一个函数
 *
 */

export default function createStore(reducer, enhancer) {
  //getState函数，返回了当前的state;所以需要定义一个变量，保存当前state;
  if (enhancer) {
    return enhancer(createStore)(reducer)
  }
  let currentState = undefined
  let dispatchListener = []
  function getState() {
    //返回当前state即可,没有入参
    return currentState
  }

  //执行方法，并且改变currentState,将action传入；action是一个对象{type:''}
  function dispatch(action) {
    currentState = reducer(currentState, action)

    // 改变了currentState；并且执行一下订阅信息；
    dispatchListener.forEach((listener) => listener())
  }

  //消息订阅，如果页面有订阅消息，将消息放在消息器中
  function subscribe(listener) {
    dispatchListener.push(listener)

    //订阅与发布是成对出现的，所以订阅的时候返回一个取消订阅函数；
    return function (params) {
      const idx = dispatchListener.indexOf(listener)
      //删除
      dispatchListener.splice(idx, 1)
    }
  }

  // 没有初始值，这个；执行一下就好了呀
  dispatch({ type: 'INIT=====' + Math.random() })

  return {
    getState,
    dispatch,
    subscribe,
  }
}
