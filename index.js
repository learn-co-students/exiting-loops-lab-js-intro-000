// loops breakOut(array, changeValue, stopValue) changes every element in `array` to `changeValue` until it reachs `stopValue`:
function breakOut(array, changeValue, stopValue){
  for (var i = 0; i<array.length; i++){
    if (array[i] === stopValue){
      break
  }
  array[i] = changeValue;
}
return array
};

// loops keepGoing(array, changeValue, skipValue) changes every element in `array` to `changeValue` unless the element === `skipValue`:
function keepGoing(array,changeValue,skipValue){
  for (var i = 0; i < array.length; i++){
    if (array[i] === skipValue){
      continue
    }
    array[i] = changeValue;
  }
  return array;
}

function findBy(array,findFn){
  for (var i = 0; i<array.length; i++){
    if(findFn(array[i])){
      return array[i]
    }
  }
  return null
}
