function breakOut(array, changeValue, stopValue){
  for (var idx = 0; idx <= array.length-1; idx++){
    if (array[idx] === stopValue){
      break;
    } else {
      array[idx] = changeValue;
    }
  }
  return array
}

function keepGoing(array, changeValue, skipValue){
  for (var idx = 0; idx <= array.length-1; idx++){
    if (array[idx] === skipValue){
      continue;
    } else {
      array[idx] = changeValue;
    }
  }
  return array
}

function findBy(array, findFn){
   for (var idx = 0; idx <= array.length-1; idx++){
     if (findFn(array[idx])){
      return array[idx] 
     }
 }
  return null 
}