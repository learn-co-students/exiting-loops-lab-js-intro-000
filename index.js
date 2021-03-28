/*changes every element in `array` to `changeValue` until it reaches `stopValue`*/
function breakOut(array, changeValue, stopValue){
  for(let i = 0; i < array.length; i++){
    if(array[i] === stopValue){
      break
    }
    array[i] = changeValue
  }
  return array
}

/*changes every element in `array` to `changeValue` unless the element === `skipValue`*/
function keepGoing(array, changeValue, skipValue){
  for(let i = 0; i < array.length; i++){
    if(array[i] === skipValue){
      continue
    }
    array[i] = changeValue
  }
  return array
}

/*finds the a value that satisfies findFn and returns null if value is not found*/
function findBy(array, findFn){
  for(let i = 0; i < array.length; i++){
    if(array[i] === findFn){
      return array[i]
    }
  }
  return null
}
