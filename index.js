var array = [1,1,1,2,1,3];
var i;

function breakOut(array, changeValue, stopValue) {
  for(i = 0;i < array.length;i++) {
    if(array[i] === stopValue){
      break;
    }
    array[i] = changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for(i = 0;i < array.length;i++) {
    if(array[i] === skipValue){
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

function findBy(array ,findFn) {
  for(i = 0;i < array.length;i++) {
    if(findFn(array[i])){
      return array[i]
    }
  }
  return null;
}
