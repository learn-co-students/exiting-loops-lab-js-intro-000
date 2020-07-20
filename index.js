function breakOut(array, changeValue, stopValue) {
  array.forEach((element, index)=>{
    element = changeValue;
    if (index === stopValue){
      break
    }
  })
  return array
}

function keepGoing(array, changeValue, skipValue) {
  array.forEach((element)=>{
    element = changeValue;
    if (element === skipValue){
      continue
    }
  })
  return array
}

findBy(array, findFn){
  array.forEach((element) => {
    if (element === `${findFn()}`){
      return element
    }
    else {
      return null
    }
  })
}