function breakOut(array, changeValue, stopValue) {
  for(var i = 0; i < array.length; i+=1) {
    let noChange = changeValue;
    if (i > stopValue) { 
      array[i] = noChange; // removes value
      break;
    }
    array[i] = changeValue;
    
  }
  return array; // return mutated array
}

function keepGoing(array, changeValue, skipValue) {
  for(var i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue; // skip this iteration of loop
    }
    array[i] = changeValue;
  }
  return array; // return the array
}

function findBy(array, findFn) {
  console.log(findFn);
  for (let i = 0; i < array.length; i++) {
    if (findFn(array[i])) { // pass the element into findFn
      return array[i];
    }
  }
  return null;
}