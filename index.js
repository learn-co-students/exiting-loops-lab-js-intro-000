function breakOut(array, changeValue, stopValue) {
  for (let i=0; i<array.length; i+=1) {
    if (array[i] !== stopValue) {
      array[i] = changeValue
    } else {
      break
    }
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (let i=0; i<array.length; i+=1) {
    if (array[i] === skipValue) {
      continue
    } else {
      array[i] = changeValue
    }
  }
  return array
}

function findBy(array, findFn) {
  for (let i=0; i<array.length; i+=1) {
    if (findFn(array[i])=== true) {
      return array[i]
    }
  }
  return null
}
