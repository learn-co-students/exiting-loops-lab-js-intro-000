function breakOut(array, changeValue, stopValue) {
  let newArray = [];
  let index = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      index = i;
      break;
    }
    array[i] = changeValue;
    newArray.push(array[i])
    }

  for (let i = index; i < array.length; i++) {
    newArray.push(array[i]);
    }

  return newArray;
}

// which iterates through array and changes every element to changeValue except those that match skipValue. Then return the array.
function keepGoing(array, changeValue, skipValue) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      newArray.push(array[i]);
      continue;
    }
    array[i] = changeValue;
    newArray.push(array[i])
    }

  return newArray;
}

// which looks for a value in array based on the return value of findFn.
// Return null if the value isnt found. Hint: Check the test file to know the signature of the findFn and the type of its return value.
//
function findBy(array, findFn) {
  for (let i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i];
    }
  }
}
