//iterates through array and changes the elements to changeValue
//until loop reaches stopValue (break) & return array
function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break
    }
    array[i] = changeValue
  }
  return array
}

//iterates through array and changes every element to changeValue
//except those that match skipValue & return array
function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue
    }
    array[i] = changeValue
  }
  return array
}

//looks for a value in array based on the return value of findFn
//return null if the value isn't found
function findBy(array, findFn) {
  for (let i = 0; i < array.length; i++) {
    if (findFn(array[i]) {
      return array[i]
    }
  }
  return null
}
