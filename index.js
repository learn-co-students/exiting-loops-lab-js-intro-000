function breakOut(array,changeValue,stopValue) {

  for (let i=0; i<array.length; i++) {
    if (array[i] !== stopValue) {
      array[i] = changeValue
      }
    else {
      break
      }
    }
    return array
  }

function keepGoing(array, changeValue, skipValue) {

  for (let i=0; i<array.length; i++) {
    if (array[i] !== skipValue) {
      array[i] = changeValue
    }
    else {
      continue
    }
  }
  return array
}

function findBy(array, findFn) {

   var count=0
   for (let i=0; i<array.length; i++) {
     if (findFn(array[i])) {
       return array[i]
     }
     else {
       count+=1
       //continue
     }
   }
   if (count===array.length) {
     return null
   }
 }
