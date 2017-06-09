/*
breakOut(array, changeValue, stopValue) which iterates through array and changes every element to changeValue until the loop reaches stopValue. Then we break out of the loop and return the array.
*/
function breakOut(array, changeValue, stopValue) {
  for (var index in array) {
    if (array[index] === stopValue) {
      return array
    }
    array[index] = changeValue
  }
}
/*
keepGoing(array, changeValue, skipValue) which iterates through array and changes every element to changeValue except those that match skipValue. Then return the array.
*/
function keepGoing(array, changeValue, skipValue) {
  for (var index in array) {
    if (array[index] === skipValue) {
      continue
    }
    array[index] = changeValue
  }
  return array
}
/*
findBy(array, findFn) which looks for a value in array based on the return value of findFn. Return null if the value isn't found. Hint: Check the test file to know the signature of the findFn and the type of its return value
*/
function findBy(array, findFn) {
  for (var index in array) {
    if (findFn(array[index])) {
      return array[index]
    }
  }
  return null
}
