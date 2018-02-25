const getArray = (obj) => {
  const xs = []
  for (var i in obj) {
    xs.push(obj[i])
    xs[xs.length - 1]['key'] = i
  }
  return xs
}

export {
  getArray
}
