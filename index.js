function breakOut(array, changeValue, stopValue) {
  for (let i=0; i < array.length-1; i++){
    if (array[i] === stopValue){
      break
    }
    array[i] = changeValue
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (var i in array) {
    if (array[i] === skipValue) {
      continue
    }
    array[i] = changeValue
  }
  return array
}

function findBy(array, findFn) {
  for (let i = 0; i<array.length-1; i++){
    var test = array[i]
    if (findFn(test) === true){
      return array[i]
    }
  }
  return null
}

console.log(findBy(([1, 1, 1, 1, 40, 1, 2], n => n === 40)))
