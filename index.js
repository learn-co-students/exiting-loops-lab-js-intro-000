function breakOut(array,changeValue, stopValue) {
  for(var i =0; i < array.length; i++) {
    if(array[i] === stopValue) {
      break;
    }
    else {
      array[i] = changeValue;
      console.log(array[i]);
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for(var i= 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue;
    }
    else {
      array[i] = changeValue;
      console.log(array[i]);
    }
  }
  return array;
}

function findBy(array, findFn) {
  for(var i =0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i];
    }
  }
  return null;
}
