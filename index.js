function breakOut(array, changeValue, stopValue){
  for(let i = 0; i < array.length; i++){
    if(i <= stopValue + 1){
      array[i] = changeValue
    }
    else {
      break
    }
  }
  return array
}

function keepGoing(array, changeValue, skipValue){
  for(let i = 0; i < array.length; i++){
    if(array[i] === skipValue){
      continue
    }
    else {
      array[i] = changeValue
    }
  }
  return array
}


function findBy(array, findFn){
  for(let i = 0; i < array.length; i++){
    if(findFn(array[i])){
      return array[i];
    }
    else {
      continue
    }
  }
  return null
}
