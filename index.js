
function breakOut(array, changeValue, stopValue){
  for (var i = 0; i < array.length; i++) {


    if(array[i] === stopValue){
      break;
    }
    array[i] = changeValue

  }
  return array;
}
function keepGoing(array, changeValue, stopValue){
  for (var i = 0; i < array.length; i++) {
    if(array[i] === stopValue){
      continue
    }

    array[i] = changeValue

  }
  return array;
}
function findBy(array, findFn){
  for (var i = 0; i < array.length; i++) {

    console.log(findFn(array[i]))
    if(findFn(array[i])){
      return array[i];
    }
    else if (i != array.length - 1){
      continue;
    }
    else{
      return null;
    }
  }

}
