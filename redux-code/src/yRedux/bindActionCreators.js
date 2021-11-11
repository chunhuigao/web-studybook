function bindAction(fn, dispatch) {
  return (...args) => dispatch(fn(...args))
}
export default function bindActionCreators(creator, dispatch) {
  let nextCreator = {}
  for (const key in creator) {
    nextCreator[key] = bindAction(creator[key], dispatch)
  }
  return nextCreator
}
