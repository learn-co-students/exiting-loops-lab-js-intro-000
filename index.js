function breakOut(arr, newVal, stopVal) {
  var index;
  arr.find((x, i, array) => {
    if (x === stopVal) return true;
    array[i] = newVal;
  })

  return arr;
}

function keepGoing(arr, newVal, skipVal) {
  arr.forEach((x, i, array) => {
    if (x !== skipVal) array[i] = newVal;
  })

  return arr;
}

function findBy(arr, findFunc) {

  return arr.find(findFunc);
}
