function breakOut(array, changeValue, stopValue){
  for (let i in array){
    if (array[i] === stopValue){
      return array
    }
    array[i] = changeValue
  }
}

function keepGoing(array, changeValue, skipValue){
  array.forEach((element, index) => {
    if (element === skipValue){
      return
    }
    array[index] = changeValue;
  })
  return array;
}

function findBy(array, findFn){

for (let i = 0 ; 0 < array.length ; i++){
  if (findFn(array[i])){
    return array[i]
  }
}
return null
}
