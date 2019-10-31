// define function 
function breakOut(array, changeValue, stopValue){
// iterate through array
  for (var i = 0; i < array.length; i++){
// changes every element to changeValue until loop reaches stopValue
// array at index is not equal to stopValue - then splice the array to remove 1 and changeValue to misc
      if (array[i] !== stopValue){
      array.splice(i, 1, changeValue);
// else when the array at index is equal to the stopValue stop the loop
    } else {
// break out of loop
      break;
    }
  } 
// return array
  return array;
}

// define function 
function keepGoing(array, changeValue, skipValue){
// iterate through array
  for (var i = 0; i < array.length; i++){
// skips those that match skipValue
  if (array[i] === skipValue){
    continue;
   } else {
// changes every element to changeValue
     array[i] = changeValue;
   }
}
// returns array
  return array;
}  
  

// define function 
function findBy(array, findFn){
// iterate through array
  for (var i = 0; i < array.length; i++){
// looks for value in array based on the value of findFn
    if(findFn(array[i])){
      return array[i];
    }
  }
// return null when value isnt found
  return null;
}





