function breakOut(array, changeValue, stopValue) {
  var i; //iteration variable
  var l; //length of array

  for ( i = 0, l = array.length ; i < l ; i++ ) {
    if (array[i] === stopValue) {
      break;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  var i; //iteration variable
  var l; //length of array

  for ( i = 0 , l = array.length ; i < l ; i++ ) {
    if (array[i] === skipValue) { continue; }
    else { array[i] = changeValue; }
  }
  return array;
}

function findBy(array, findFn) {
  var i;  //iteration variable
  
  for ( i = 0 ; i < array.length ; i++ ) {
    if (findFn(array[i])) { return array[i]; }
  }
  return null;
}