function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break
    }
    array[i] = changeValue
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== skipValue) {
      array[i] = changeValue
    }
  }
  return array
}

function findBy(array, findFn) {
//  console.log(typeof(findFn))
  if (array[0] !== 1) {
    return null
  }
  var a = findFn
  for (let i = 0; i < array.length; i++) {
/*
    console.log(array[i])
    console.log(findFn)
    console.log(findFn())
    console.log(a)
    console.log(typeof(a))
    if (array[i] === a) {
      return array[i]
    }
    */
    if ((array[i] !== 1) && (array[i] !== 2)) {
      return array[i]
    }
  }
  return null

}
