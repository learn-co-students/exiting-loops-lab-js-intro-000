function breakOut (array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      return array
    }
    else {
    array[i] = changeValue
    }
  }
}

function keepGoing (array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue
    }
    else {
    array[i] = changeValue
    }
  }
  return array
}

function findBy (array, findFn) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === findFn) {
      return array[i]
    }
  }
}
