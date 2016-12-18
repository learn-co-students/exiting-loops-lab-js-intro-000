function breakOut(array, changeValue, stopValue){
  for (var i = 0; i <= array.length-1; i++){
    if(array[i] !== stopValue){
    array[i] = changeValue;
    }
    else{
      break;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  for (var i = 0; i <= array.length-1; i++){
    if (array[i] !== skipValue){
      array[i] = changeValue;
      continue;
    }
  }
  return array
}

function findBy(array, findFn){
  let found = false
  for (let i = 0; i <= array.length-1; i++){
    if(findFn(array[i])){
      found = true
      return array[i]
      break
    }
  }
  if(!found){
    return null
  }
}
