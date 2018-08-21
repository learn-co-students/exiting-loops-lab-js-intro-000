function breakOut(array, changeValue, stopValue) {
  for( let x=0; x < array.length; x++) {
    if (array[x] === stopValue) {
      break
    } else {
      array[x] = changeValue
    }
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for( let x=0; x < array.length; x++) {
    if (array[x] === skipValue) {
      continue
    } else {
      array[x] = changeValue
    }
  }
  return array

}

function findBy(array, findFn) {
  let found = null
  for( let x=0; x < array.length; x++) {
      if (findFn(array[x])) {
          found = array[x]
      }
  }
  return found;
}
