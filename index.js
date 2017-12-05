function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if(array) {
      array[i] = changeValue
      break
  }
  return array
}


function keepGoing(array, changeValue, skipValue) {
  for (let i = 0 ; i < array.length; i++) {
    if(array[i] !== changeValue) {
      array[i] = changeValue
      continue
    }
  }
}


function findBy(array, findFn) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === findFn)
    return array[i]
  }
  return null
}
