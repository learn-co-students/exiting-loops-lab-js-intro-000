function breakOut(array, changeValue, stopValue){
  for (var i=0, i < array.length, i++){
    if (i !== stopValue){
    array[i] = changeValue
    break
    }
  }
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0, i < array.length, i++) {
    if (i !== stopValue) {
      array[i] = changeValue
      continue
    }
  }
}

 function findBy(array, findFn) {
  array.forEach(element => {
    if (element !== findFn) {
      return null //
    }
  })
}
