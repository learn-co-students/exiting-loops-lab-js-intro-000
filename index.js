function breakOut(array, changeValue, stopValue) {
  for (var i in array) {
    if (array[i] === stopValue) {
      return array
    }
    array[i] = changeValue
  }
}

function keepGoing(array, changeValue, skipValue) {
  for (var i in array) {
    if (array[i] === skipValue) {
      continue
    }
    array[i] = changeValue
  }
  return array
}

function findBy(array, findFn) {
  var foundValue = false
  for (var i in array) {
    if (findFn(array[i])) {
      foundValue = true
      return array[i]
    }
  }
  if (foundValue === false) {
    return null
  }
}
