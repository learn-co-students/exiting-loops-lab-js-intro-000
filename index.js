let breakOut = (array, changeValue, stopValue) =>{
  for (let i = 0; i < array.length; i++){
    if (array[i] === stopValue){
      break
  } else{
    array[i] = changeValue
  }
} return array
}

let keepGoing = (array, changeValue, stopValue) => {
  for (let i = 0; i < array.length; i++){
    if (array[i] === stopValue){
      continue
  } else{
    array[i] = changeValue
  }
} return array
}

let findBy = (array, findFn) => {
  for (let i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
}
