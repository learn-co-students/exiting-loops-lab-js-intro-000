function breakOut(array, changeValue, stopValue){
  for(var x=0; x<array.length; x++){
    if(array[x] === stopValue){
      break
    }
    array[x] = changeValue
  }
  return array
}

function keepGoing(array, changeValue, skipValue){
  for(var x = 0; x < array.length; x++){
    if(array[x] === skipValue){
      continue
    }
    array[x] = changeValue
  }
  return array
}

// function findBy(array, findFn){
//   var z = findFn()
//   for(var i = 0; i<array.length; i++){
//     if (array[i] === z) {
//       return array[i]
//     }
//   }
// }

function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {
    if (findFn(array[i])){
      return array[i];
    }
  }
  return null;
}
