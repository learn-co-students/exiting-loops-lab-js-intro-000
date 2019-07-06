var breakOut = (array, changeValue, stopValue) => {
  for (let i = 0; i < array.length; i++) {
    if(array[i] === stopValue) {
      break
    } else {
      array[i] = changeValue
    }
  }
  return array
}

var keepGoing = (array, changeValue, skipValue) => {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === skipValue) {
      continue
    } else {
      array[i] = changeValue
    }
  }
  return array
}

var findBy = (array, findFn) => {
  for(let i = 0; i < array.length; i++) {
    if(findFn(array[i])) {
      return array[i]
    } else {
      continue
    }
  }
  return null
}
