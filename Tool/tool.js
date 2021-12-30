const isEmptyObject = (o) => {
  if (typeof o === 'object') {
    return Object.keys(obj).length === 0
  } else {
    return false
  }
}
