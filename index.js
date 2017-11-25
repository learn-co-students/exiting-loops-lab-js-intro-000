function breakOut(arr, changeValue, stopValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == stopValue) {
      break;
    }
    arr[i] = changeValue;
  }
  return arr;
}

function keepGoing(arr, changeValue, stopValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == stopValue) {
      continue;
    }
    arr[i] = changeValue;
  }
  return arr;
}

function findBy(arr, findFn) {
  for (let i = 0; i < arr.length; i++) {
    if (findFn(arr[i]) === true) {
      return arr[i];
    }
  }
  return null;
}
