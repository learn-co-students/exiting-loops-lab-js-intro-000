function breakOut(array, changeValue, stopValue){
  for(var i = 0; i < array.length; i++){
    if(array[i] !== stopValue){
      array[i] = changeValue;
    } else {
      break;
    }
  }
  return array;
}


function keepGoing(array, changeValue, skipValue){
  for(var i = 0; i < array.length; i++){
    if(array[i] !== skipValue){
      array[i] = changeValue;
    } else {
      array[i] = array[i];
    }
  }
  return array;
}

function breakOut(array, changeValue, stopValue){
  for (var i = 0, l = array.length; i < l; i++){
    if (array[i] == stopValue){
      break;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  for (var i = 0, l = array.length; i < l; i++){
    if (array[i] == skipValue){
      continue;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}

function findBy(array, findFn){
  for (var i = 0; i < array.length; i++){
    if (array[i] === findFn){
      return array[i];
    }
  }
  return null;
}
