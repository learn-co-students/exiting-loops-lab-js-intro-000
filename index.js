function breakOut(arr, changeValue, stopValue){
  for(let i=0; i < arr.length; i++){
    if(arr[i]===stopValue){
      break;
    }
    arr[i] = changeValue;
  }
  return arr;
}

function keepGoing(array, changeValue, skipValue){
  for(let i=0; i < array.length; i++){
    if(array[i]===skipValue){
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

function findBy(array, findFn){
  for(let i=0; i < array.length; i++){
    if(findFn(array[i])){
      return array[i];
    }
  }
  return null;
}
