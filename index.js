function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i]===stopValue) {
      break;
    }
    array[i]=changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  for (var i = 0; i < array.length; i++) {
    if (array[i]===skipValue) {
      continue;
    }
    array[i]=changeValue;
  }
  return array
}

function findBy(array, findFn) {
  var findval = false; //Conndition if value from findFn is in array
  for (var i = 0; i < array.length; i++) {
    if(findFn(array[i])===true){ //If findFn function finds its value in the array, return that value
      return array[i]
    }
  }
  if(findval) { //if not found in the array, return null
    return null
  }
}
