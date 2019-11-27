function breakOut(array, changeValue, stopValue) {
for (var i = 0; i < array.length; i++ ) {
  if(array[i] === stopValue) {
    break;
  }else {
    array.splice(i, 1, changeValue);
  }
}
    return array;
}
function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++ ) {
    if(array[i] === skipValue) {
      continue;
    }else {
      array.splice(i, 1, changeValue);
    }
  }
      return array;
}
function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {
    if {array[i] === findFn()} {
      return findFn();
    } else {
      return null;
    }
  }
}
