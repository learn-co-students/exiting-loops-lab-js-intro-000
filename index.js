

function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i< array.length; i++ ) {
    if (array[i] === stopValue) {
      break;
    }
    array[i] = changeValue;
  }
  return array;
}
//
//
// keepGoing(array, changeValue, skipValue)
// which iterates through array and changes every element
//  to changeValue except those that match skipValue. Then return the array.
function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
  if(array[i] === skipValue){
    continue;
  }
  array[i] = changeValue;
}
return array;
}


function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
  return null
}
