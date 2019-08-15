function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == stopValue) {
      break;
    }
    array[i] = changeValue;
  }
  return array;
}

//console.log(breakOut([20,20,20,2,1,3], 50, 1));

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == skipValue) {
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

//console.log(keepGoing([30,1, 40, 2, 1, 80, 1, 50], 45, 1));

function findBy(array, findFn) {
  for (let i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i];
    }
  }
  return null;
}

//console.log(findBy([50, 40, 30, 2, 30, 34, 1], (n) => n % 17 == 0));
