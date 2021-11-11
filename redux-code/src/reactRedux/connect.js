export default function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrappdComponent) {
    return function (props) {
      return <WrappdComponent {...props} />
    }
  }
}
