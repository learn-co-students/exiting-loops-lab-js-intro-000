function breakOut(array, changeValue, stopValue){
  for(var i = 0; i < array.length; i++){
    if(array[i] === stopValue){
      break
    }
    else{
      array[i] = changeValue;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  for(var i = 0; i < array.length; i++){
    if(array[i] === skipValue){
      continue // since we're not doing anything this could just be blank, no if condition.
    }
    else{
      array[i] = changeValue;
    }
  }
  return array;
}

function findBy(array, findFn){
  for(var i = 0; i < array.length; i++){
    if(findFn(array[i])){
      return array[i]
    }
    else{
      continue
    }
  }
  return null;
}
