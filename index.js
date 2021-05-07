function breakOut(array, changeValue, stopValue) {
  
  
  for (let i =0; i < array.length; i++) {
    if (i===stopValue+2) {break}
    array[i] = changeValue
  }
  return array
}


function keepGoing(array, changeValue, skipValue) {
  for (let i=0; i< array.length; i++){
    if (array[i]===skipValue) {continue}
    array[i] = changeValue
    
  }
  console.log(array)
  return array
}

function findBy(array, findFn) {

  for (let i=0; i< array.length; i++) {
    if (findFn(array[i])) {return array[i]}
  }
  return null
  
}

console.log(findBy([1, 2, 3,4,5], 5))
