function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break;
    }
    array[i] = changeValue;
    // changing after we check
  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  for(let i =0; i< array.length; i++){
    if(array[i] === skipValue){
      continue
    }
    array[i] = changeValue;
  }
  return array
}

function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      //I believe that is how we are checking that findFn is in the array that we are looping thru
      return array[i];
    }
  }
  return null;
}
