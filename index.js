function breakOut(array, changeValue, stopValue){
  for (var i in array){
    if (array[i] != stopValue){
      array[i] = changeValue
    }
    else {
  break
  }
}
return array
}

function keepGoing(array, changeValue, skipValue){
  for (var i in array){
    if (array[i] != skipValue){
      array[i] = changeValue
    }
}
return array
}


function findBy(array, findFn) {
   for (var i in array){
     if (findFn(array[i])) {
       return array[i]
     }
   }
   return null;
 }

// function findBy(array, findFn){
//   for (var i in array){
//     if (array[i] != findFn(array[i])){
//       return null
//     }
//   }
//   return array[i]
// }
