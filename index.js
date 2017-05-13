const breakOut = (array, changeValue, stopValue) => {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] === stopValue) {
          break
    }
    array[i] = changeValue
  }
  return array
}

const keepGoing = (array, changeValue, skipValue) => {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] !== skipValue) {
      array[i] = changeValue
    }
    continue
  }
  return array
}

const findBy = (array, findFn) => {
    for (let i = 0, l = array.length; i < l; i++) {
      if (findFn(array[i])) {
        return array[i]
      }
    }
    return null
}
