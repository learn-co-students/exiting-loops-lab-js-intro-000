// change every element in an array to a certain value until a stop value is reached
function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break
    }
    array[i] = changeValue;
  }
  return array;
}

// change every element in an array to a certain value unless the element === a skip value
function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue
    }
    array[i] = changeValue;
  }
  return array;
}

// finds the first element that satisfies the given function
function findBy(array, findFn) {
  for (let i = 0; i < array.length; i++) {
    if(findFn(array[i])) {
      return array[i];
    }
  }
  return null;
}
