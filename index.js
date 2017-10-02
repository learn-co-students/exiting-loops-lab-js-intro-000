function breakOut(array, changeValue, stopValue){
  var i=0;
  const l=array.length;
  for (i; i<l; i++){
    if (array[i] === stopValue) {
      break;
    }
    array[i] = changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  var i=0;
  const l = array.length;
  for (i; i<l; i++){
    if (array[i] === skipValue){
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

function findBy(array, findFn){
  var i=0;
  const l = array.length;
  for (i; i<l; i++){
    if (findFn(array[i]) === true ){
      return array[i];
    }
  }
  return null;
}
