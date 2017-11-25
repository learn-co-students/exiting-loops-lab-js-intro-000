function breakOut(array, changeValue, stopValue){
  for (var i = 0; i < array.length; i++){
    if (array[i] === stopValue){
      break
    }
    array[i] = changeValue
  }
  return array
}

function keepGoing(array, changeValue, skipValue){
  for (var i = 0; i < array.length; i++){
    if (array[i]===skipValue){
      continue
    }
    array[i] = changeValue
  }
  return array
}

function findBy(array, findFn){
  for (let i = 0, l = array.length; i < l; i++){
    if (findFn(array[i])){
      return array[i]
    }
  } return null
}
/*- FindFn() MUST accept parameter
- FindFn() 'does the if statement for me'
- Want the return value of FindFn()
*/
