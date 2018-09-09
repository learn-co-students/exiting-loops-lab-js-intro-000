function breakOut(array, changeValue, stopValue) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === stopValue) {
      return array;
      break
    } else array[i] = changeValue
  }
}

function keepGoing(array, changeValue, skipValue) {
    for(let i = 0; i < array.length; i++) {
      if(array[i] !== skipValue ) {
        array[i] = changeValue
      }
    } return array
}

function findBy(array, findFn) {
  for(let i = 0; i < array.length; i ++) {
    if(findFn(array[i])) {
      return array[i]
    }
  }
}
