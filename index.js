function breakOut(array, changeValue, stopValue){
  for(let i=0; i < array.length; i++){
    if (array[i] == stopValue){
      return array
    } else{
      array[i]=changeValue
    }
  }

}

function keepGoing(array, changeValue, skipValue){
  array.forEach((item, index, arr) =>{
    if (item != skipValue) {
      arr[index] = changeValue
    }
  })
  return array
}

function findBy(array, findFn){
  var a = array.find(findFn)
  if (array.find(findFn)) {
    return a
  } else {
    return null
  }
}
