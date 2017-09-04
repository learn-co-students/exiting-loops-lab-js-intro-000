function breakOut(array, changeValue, stopValue){
  for(var i = 0; i < array.length; i++){
    if(array[i] === stopValue){
      break
  }else if(array[i] !== changeValue){
      array[i] = changeValue;
  }

}
return array
}

function keepGoing(array, changeValue, skipValue){
  for(var i = 0; i < array.length; i++){
    if(array[i] == skipValue){

    } else if(array[i] !== skipValue){
      array[i] = changeValue;
    }
  }
  return array;
}

function findBy(array, findFn){
  for(let i = 0; i < array.length; i++){
    if(findFn(array[i])){
      return array[i];
    }
  }
}
