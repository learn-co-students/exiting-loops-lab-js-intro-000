function breakOut(arr, cVal, sVal) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === sVal) {
      break;
    }

    arr[i] = cVal;
  }


  return arr;
}

function keepGoing(arr, cVal, sVal) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === sVal) {
      continue;
    }

    arr[i] = cVal;
  }

  return arr;
}

function findBy(arr, findFn) {
  return arr.find(findFn)
}
