function breakOut(array, changeValue, stopValue){
  for (var i = 0; i < array.length; i++){
    console.log(array[i]);
    if (array[i] === stopValue) {
      break;
    } else {
      console.log(array);
      array.splice(i,1, changeValue);
      console.log(array);
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  for (var i = 0; i < array.length; i++){
    if (array[i] === skipValue){
      continue;
    } else {
        array.splice(i,1, changeValue);
    }
  }
  return array;
}

function findBy(array, findFn){
  for(var i = 0 ; i < array.length ; i++){
    debugger;
    console.log(array[i]);
    console.log(findFn)
    if (findFn(array[i])){
      return array[i];
    }
  }
  return null

}
