/*
 * @Author: mikey.zhaopeng
 * @Date: 2021-11-11 23:04:22
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-11-12 00:07:41
 * 跨层级传输数据
 *
 *
 */

import React from 'react'

//创建context对象
export const Context = React.createContext()

//通过Provider传递store

export default function Provider({ store, children }) {
  return <Context.Provider value={store}>{children}</Context.Provider>
}

//子孙组件消费context
// consumer 可以用在任意组件
// contextType 只能用在类组件中
// useContent 只能用在函数组件中
