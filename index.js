function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
      if (array[i] === stopValue) {
         break;
      }
      array[i] = changeValue 
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] >= skipValue) {
         break;
      }
      array[i] = changeValue 
  }
   return array
}