function breakOut(array, changeValue, stopValue) {
  for (var i=0, l=array.length; i<l; i++) {
    if (array[i]===stopValue) {
      return array;
    } else {
      array[i]=changeValue;
    }
  }
}

function keepGoing(array, changeValue, skipValue) {
  for (var i=0, l=array.length; i<l; i++) {
    if (array[i]===skipValue) {
      continue;
    }
    array[i]=changeValue;
  }
  return array;
}

function findBy(array, findFn) {
  var valFound=false;
  for (var i=0, l=array.length; i<l; i++) {
    if (findFn(array[i])) {
      var valFound=true;
      return array[i];
    }
  }
  if (valFound===false) {
    return null
  }
}
