//把vnode -> node并插入

// vnode 虚拟节点
// node 真是节点
function render(vnode, container) {
  const node = createNode(vnode)

  container.appendChild(node)
}
function isStringOrNumber(sth) {
  return typeof sth === 'string' || typeof sth === 'number'
}
//将虚拟节点转换为真是节点
function createNode(vnode) {
  const { type } = vnode
  let node
  //原生标签节点
  if (typeof type === 'string') {
    node = updateHostComponent(vnode)
  } else if (isStringOrNumber(vnode)) {
    //文本标签
    node = updateTextComponent(vnode)
  } else if (typeof type === 'function') {
    //类组件，函数组件
    node = type.prototype.isReactComponent
      ? updateClassComponent(vnode)
      : updateFunctionComponent(vnode)
  } else {
    // fragment标签
    node = updateFragmentComponent(vnode)
  }
  return node
}
function updateFragmentComponent(vnode) {
  //const d =
  const { props } = vnode
  const node = document.createDocumentFragment()
  reconcileChildren(node, props.children)
  return node
}

//根据虚拟节点创建类组件
function updateClassComponent(vnode) {
  const { type, props } = vnode

  const instance = new type(props)
  const child = instance.render()

  const node = createNode(child)

  return node
}

//根据虚拟节点创建函数组件

function updateFunctionComponent(vnode) {
  const { type, props } = vnode
  const child = type(props)
  const node = createNode(child)
  return node
}

//根据虚拟节点创建文本节点
function updateTextComponent(vnode) {
  const node = document.createTextNode(vnode)
  return node
}

//根据虚拟节点生成原生标签节点,diva,p,h1
function updateHostComponent(vnode) {
  const { type, props } = vnode
  const node = document.createElement(type)
  updateNode(node, props)
  reconcileChildren(node, props.children)
  return node
}

//更新原生标签属性和属性值
function updateNode(node, nextValue) {
  Object.keys(nextValue)
    .filter((k) => k !== 'children')
    .forEach((k) => {
      node[k] = nextValue[k]
    })
}

// 处理子节点
function reconcileChildren(parentNode, children) {
  //将children转换为数组
  const newChildren = Array.isArray(children) ? children : [children]
  for (let i = 0; i < newChildren.length; i++) {
    const child = newChildren[i]
    // vnode 变成node ;并将node插入parentNode

    render(child || '', parentNode)
  }
}
export default { render }
