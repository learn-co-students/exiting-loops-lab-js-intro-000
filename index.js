function breakOut(array, changeValue, stopValue) {
  for(var i=0; i < array.length ; i++ ) {
    if (array[i]!== stopValue ) {
      array[i] = changeValue;
    } else break;
    
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for(var j=0; j < array.length ; j++ ) {
    if (array[j] !== skipValue ) {
      array[j] = changeValue;
    } else continue;
    
  }
  return array;
}

function findBy(array, findFn) {
  for(var k=0; k < array.length ; k++ ) {
    if (findFn(array[k])) {
      return array[k];
    }
  }
  return null;
}