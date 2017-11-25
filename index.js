function breakOut(array, changeValue, stopValue){
  for(var x in array){
    if(array[x] === stopValue){
      break;
    }
    else{
      array[x] = changeValue;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  for(var x in array){
    if(array[x] === skipValue){
      continue;
    }
    else{
      array[x] = changeValue;
    }
  }
  return array;
}

function findBy(array, findFn){
  for(var x in array){
    if(findFn(array[x])){
      return array[x];
    }
  }
  return null;
}
