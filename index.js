function breakOut(array, changeValue, stopValue) {
  // changes every element in array to changeValue
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] == stopValue) {
      break
    }
    else {
      array[i] = changeValue
    }
  }

  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] == skipValue) {
      continue
    }

    array[i] = changeValue
  }

  return array
}


function findBy(array, findFn) {
// looks for a value in array based on return value of findEn
  for (let i = 0, l = array.length; i < l; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
  return null
}
