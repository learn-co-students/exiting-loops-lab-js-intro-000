function breakOut(array, changeValue, stopValue){
  for (var i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break;
    }else{
      array[i] = changeValue;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  var i = 0;
  while (i< array.length) {
    if (array[i] === skipValue) {
      i++;
      continue;
    }else{
      array[i] = changeValue;
    }
    i++;
  }
  return array;
}

function findBy(array, findFn){
  var i = 0;
  while( i < array.length){
    if (findFn(array[i])) {
      return array[i];
    }
    i++;
  }
  return null;
}
