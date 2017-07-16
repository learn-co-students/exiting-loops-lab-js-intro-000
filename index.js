function breakOut(array, changeValue, stopValue){
  for (var i = 0; i < array.length; i++) {
    if (array[i] == stopValue) {
      break;
    }
    array[i] = changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  for (var i = 0; i < array.length; i++) {
    if (array[i] == skipValue){
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {
    if (findFn(array[i])) {// javascript will return a true statement but will continue if statement if false
    return array[i];
  }
  }
  return null;
}


//order of how to write code
//CORRECT
//efficiency
//length / readablity - theses are a trade off...long code is easier to read, short code is usually harder to read
//
