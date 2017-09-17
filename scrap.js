function breakOut(array, changevalue, stopValue) {
//  var newArray = []
  array.forEach((element,index,array) => {
    if (element === stopValue) {
      break
    }
    else {
      element = changeValue
    }
  })
  return array
}

function keepGoing(array,changeValue,skipValue) {
  array.forEach((element,index,array) => {
    if (element === skipValue) {
      continue
    }
    element = changeValue
  })
  return array
}
