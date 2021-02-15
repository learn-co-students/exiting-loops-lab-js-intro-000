function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== stopValue) {
      array[i] = changeValue;
    }
    else {
      break
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue
    }
    array[i] = changeValue;
  }
  return array;
}


// findBy(array, findFn) which looks for a value in array based on the return value of findFn.
// Return null if the value isn't found.
// Hint: Check the test file to know the signature of the findFn and the type of its return value
function findBy(array, findFn) {
  for (let i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
  return null
}