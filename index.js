function breakOut(array, changeValue, stopValue) {
  for (let i = 0, x = array.length; i < x; i++) {
    if (array[i] === stopValue) {
      break
    }

    array[i] = changeValue
  }

  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0, y = array.length; i < y; i++) {
    if (array[i] === skipValue) {
      continue
    }

    array[i] = changeValue
  }
return array
}

function findBy(array, findFn) {
  for (let i = 0, a = array.length; i < a; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
  return null
}
