//把vnode -> node并插入

// vnode 虚拟节点
// node 真是节点
function render(vnode, container) {
  const node = createNode(vnode)

  container.appendChild(node)
}

export default { render }
