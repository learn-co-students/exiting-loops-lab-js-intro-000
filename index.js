function breakOut(array, changeValue, stopValue) {
  for(let i = 0; i < array.length ; i++) {
    if (array[i] === stopValue) {
      return array;
    }
      array[i] = changeValue;
  }// re-iterates from here.
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0 ; i < array.length ; i++) {
    if (array[i] === skipValue) {
        continue;
    }
      array[i] = changeValue;
  }
    return array;// continue goes here then re-iterates.
}


function findBy(array, findFn) {
  for(let i = 0; i < array.length; i++){
    if( findFn(array[i]) ){
      return array[i]
    }
  }
  return null;
}
