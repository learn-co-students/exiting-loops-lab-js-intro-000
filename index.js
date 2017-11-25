function breakOut(array, changeValue, stopValue){
  for (var i = 0; i < array.length; i++){
    if (array[i] === stopValue){
      break;
    }
    else{
      array[i] = changeValue;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  for (var i in array){
    if (array[i] === skipValue){
      continue;
    }
    else{
      array[i] = changeValue;
    }
  }
  return array;
}

function findBy(array, findFn){
  for (var i in array){
    if (findFn(array[i])){
      return array[i];
    }
  }
  return null;
}
