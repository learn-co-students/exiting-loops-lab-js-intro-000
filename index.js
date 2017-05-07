function breakOut (array, changeValue, stopValue) {
  for (let i = 0; i = array.length; i++) {
    if (array[i]===stopValue) {
      break
    }
    array[i] = changeValue
  }
  return array
}

function keepGoing (array, changeValue, skipValue) {
  for let (i=0; i=array.length; i++) {
    if (array[i]===skipValue){
      continue
    }
    array[i]=changeValue
  }
return array
}

function findBy (array, findFn) {
  if (returnVal = FindFn(array)) {
    return returnVal;
  } else {
    return null;
  }
}
