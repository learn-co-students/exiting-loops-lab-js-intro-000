function breakOut(array, changeValue, stopValue){

for(let i = 0 ; i < array.length ; i++){
  if (array[i] === stopValue){
    break
  }
  array[i] = changeValue
}
return array
}

function keepGoing(array, changeValue, skipValue){

  array.forEach((element, index) => {
    if (element === skipValue){
      return
    }
    array[index] = changeValue
  })
  return array
}

function findBy(array, findFn){

for (let i = 0 ; i < array.length ; i++){
  if (findFn(array[i])){
    return array[i]
  }
}
return null
}
