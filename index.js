// breakOut(array, changeValue, stopValue) which iterates through array and
// changes every element to changeValue until the loop reaches stopValue.
// Then we break out of the loop and return the array.
function breakOut(array, changeValue, stopValue) {
  var j = array.length;
  for (var i = 0; i < j; i++) {
    if (array[i] === stopValue) {
      break;
    } else {
      array[i] = changeValue;
    }
  }
}

// keepGoing(array, changeValue, skipValue) which iterates through array and changes every element to changeValue except those that match skipValue. Then return the array.
function keepGoing(array, changeValue, stopValue) {

}
// findBy(array, findFn) which looks for a value in array based on the return value of findFn. Return null if the value isn't found. Hint: Check the test file to know the signature of the findFn and the type of its return value
function findBy(array, findFn) {

}
