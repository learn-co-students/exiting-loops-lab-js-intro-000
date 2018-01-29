function breakOut(array, changeValue, stopValue){
  for (var i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break;
    }
    array[i] = changeValue;
  }
  return array;
}
function keepGoing(array, changeValue, skipValue){
  for (var i = 0; i < array.length; i++) {
    if(array[i] !== skipValue)
    array[i] = changeValue;
  }
  return array;
}
function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {
    if(findFn(array[i])){
      break;
    }
    else {
      console.log(null);
    }
  }
  return array[i];
}
