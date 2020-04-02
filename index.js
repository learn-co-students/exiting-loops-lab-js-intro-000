// iterates through array and changes every element to changeValue until the loop reaches stopValue.
// break out of the loop and return the array.
function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; ++i) {
    if (array[i] === stopValue) {
      break
    } else {
      array[i] = changeValue

    }
  }
  return array
}

// iterates through array and changes every element to changeValue except those that match skipValue.
// return the array.
function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; ++i) {
    if (array[i] !== skipValue) {
      array[i] = changeValue
    }
  }
  return array
}

// look for a value in array based on the return value of findFn. Return null if the value isn't found.
function findBy(array, findFn) {
  for (let i = 0; i < array.length; ++i) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
}
