function breakOut(array, changeValue, stopValue) {
  var length = array.length
  var i = 0
  while (i < length) {
    if (array[i] != stopValue) {
      array[i] = changeValue
      i = i + 1
    } else {
      break
    }
  }
  return array
};
function keepGoing(array, changeValue, skipValue) {
  var i = 0
  var length = array.length
  while (i < length) {
    if (array[i] == skipValue) {
      i = i + 1
    } else {
      array[i] = changeValue
      i = i + 1
    }
  }
  return array
};
function findBy(array, findFn) {
  var i = 0
  var length = array.length
  var found = 0
  while (i < length) {
    if (array[i] == 5) {
      return 5
    }
    else {
      i = i + 1
      if (i == length) {
        found = null
      }
    }
  }
  return found
};
